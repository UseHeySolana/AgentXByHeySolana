
const TwitUrl = process.env.NEXT_PUBLIC_ENV == "dev"
  ? "http://localhost:3001"
  : "https://heysolanatwitterbot.onrender.com";

const DBurl = process.env.NEXT_PUBLIC_ENV == "dev"
  ? "http://127.0.0.1:8000/api"
  : "https://api.yraytestings.com.ng/api";

const request = {
  get: async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
    });

    return response;
  },
  post: async (data: FormData, url: string) => {
    // Upload to your API endpoint

    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    return response;
  },
  postJson: async (data: any, url: string) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  },
};

const fetchUser = async (username: string) => {
  try {
    const response = await request.postJson({ "username": username }, `${TwitUrl}/fetch-user`);
    if (response) {
      const data = await response.json();
      return data;
    } else {
      console.log("No Such User!");
      return false;
    }
  } catch (e) {
    console.error("Error fetching Data", e);
    return false;
  }
};

const saveUserToDB = async (userDetails: any) => {
  try {
    const formData = new FormData()
    formData.append('username', userDetails.username);
    formData.append('user_id', userDetails.user_id);
    formData.append('phone_number', userDetails.phone_number);
    formData.append('email_address', userDetails.email_address);
    formData.append('wallet_address', userDetails.wallet_address);

    const response = await request.post(formData, `${DBurl}/register_bot_user`);
    if (response) {
      const data = await response.json();
      return data;
    } else {
      console.log("User Registered!");
      return false;
    }
  } catch (e) {
    console.error("Error fetching Data", e);
    return false;
  }
}


export {
  fetchUser,
  saveUserToDB,
};
