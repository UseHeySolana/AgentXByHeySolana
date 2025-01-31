import Image from "next/image";

export default function Footer() {
    return (
      <div className="bg-[#161616]  py-10">
        <div className="w-11/12  md:w-10/12 m-auto space-y-3 md:space-y-0 flex flex-col md:flex-row justify-center md:justify-between items-start">
          <div className="space-y-5 flex flex-col justify-center w-full">
            <div className="flex flex-row justify-center md:justify-start items-center gap-x-2">
              <img
                src="/pngs/logo.png"
                className="min-w-[40px] h-[40px]"
                alt="Logo"
              />{" "}
              <h1 className="text-[40px] ">HeySolana</h1>
            </div>
            <h2 className="text-[24px] md:text-[46px] text-center md:text-start text-footergrey">
              Try Hey Solana Today
            </h2>
            <div className="text-footergrey space-x-2 md:space-x-5 flex flex-row justify-center md:justify-start items-center">
              <button className="border border-footergrey p-2 px-5 md:px-10 rounded-full">
                Term of Service
              </button>
              <button className="border border-footergrey p-2 px-5 md:px-10 rounded-full">
                Privacy Policy
              </button>
            </div>
          </div>

          <div className="flex felx-row justify-center  w-full md:justify-end text-footergrey items-start gap-x-20">
            <ul>
              <li>Get App</li>
              <li>Resources</li>
              <li>Contact</li>
            </ul>

            <ul>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Telegram</a>
              </li>
              <li>
                <a href="">Discord</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-10/12 m-auto pt-10 text-footergrey">
          <hr className="border border-footergrey" />
          <div className="pt-5">
            <div>&copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    );
}
