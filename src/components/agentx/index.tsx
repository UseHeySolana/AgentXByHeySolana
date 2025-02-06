"use client";

import { useEffect, useState } from "react";
import { fetchUser, saveUserToDB } from "../lib";
import { CircularProgress } from "@mui/material";

export default function AgentX() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    'type': "",
    "message": ""
  });
  const [userDetails, setUserDetails] = useState({
    username: "",
    user_id: "",
    phone_number: "",
    email_address: "",
    wallet_address: "",
  })

  const toastMessage = (type: string, message: string) => {
    setToast({
      type: type,
      "message": message
    })
    setTimeout(() => {
      setToast({
        type: "",
        message: "",
      });
    }, 3000);
  }

  const checkUser = async (username: string) => {
    const user = await fetchUser(username);
    if (!user) return false;
    setUserDetails({ ...userDetails, user_id: user.userId })
    return user.userId;
  }
  const registerUser = async () => {
    setLoading(true)
    if (userDetails.email_address == "" || userDetails.phone_number == "" || userDetails.username == "" || userDetails.wallet_address == "") {
      toastMessage("error", "All fields are required")
      setLoading(false);
      return;
    }
    const available = await checkUser(userDetails.username);
    if (!userDetails.user_id || userDetails.user_id == "") {
      toastMessage("error", "Invalid Username");
      setLoading(false);
      return;
    }


try {
  const response = await saveUserToDB(userDetails);
  if (response.status) {
    setLoading(false);
    toastMessage("success", response.message);
  } else {
    setLoading(false);
    toastMessage("error", response.message);
  }
} catch (e: any) {
  setLoading(false);
  toastMessage("error", "User Already Registered");
}



  }

  return (
    <div className="w-screen z-50 h-screen relative flex flex-col space-y-10 justify-center py-5 items-center">
      {toast.message != "" && < div className="toast toast-top toast-end">
        <div className={`alert ${toast.type == "success" ? "alert-success" : "alert-info"} `}>
          <span>{toast.message}</span>
        </div>
      </div>}
      <div className="w-screen">
        <div className="w-fit m-auto">
          <div className="flex justify-center flex-row items-center">
            <h1 className="text-[50px] font-bold">Agent</h1>
            <img src="/agentxlogo.png" className="h-[50px] w-[50px]" alt="agentx" />
          </div>

          <p className="text-end">by HeySolana</p>

        </div>
        <div className="card shadow-xl w-11/12 md:w-6/12 m-auto my-10 p-2  border border-darkpink/50">
          <div className="card-body p-4 md:p-10 ">
            <div className="w-full  space-y-4">
              <input type="text" onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }} placeholder="Enter your X account without the @" className="input input-bordered w-full " />
              <input type="email" onChange={(e) => { setUserDetails({ ...userDetails, email_address: e.target.value }) }} placeholder="Enter your email address" className="input input-bordered w-full" />
              <input type="text" onChange={(e) => { setUserDetails({ ...userDetails, phone_number: e.target.value }) }} placeholder="Enter your mobile number" className="input input-bordered w-full " />
              <input type="text" onChange={(e) => { setUserDetails({ ...userDetails, wallet_address: e.target.value }) }} placeholder="Enter your wallet address" className="input input-bordered w-full " />

              <div className="flex justify-center items-center py-5">
                <button onClick={registerUser} className="btn w-5/12 btn-primary">{loading ? <CircularProgress size={12} /> : "Sign up"}</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div >
  );
}
