import Image from "next/image";

export default function Navigation() {
    return (
      <div className="backdrop-blur-md bg-[#28282866]/20 my-5 flex flex-row justify-between w-11/12 md:w-11/12 m-auto p-3 px-5 rounded-full border border-darkpink/20 ">
        <div className="flex flex-row justify-center items-center gap-x-2">
          <img
            src="/pngs/logo.png"
            className="min-w-[40px] h-[40px]"
            alt="Logo"
          />{" "}
          <h1 className="hidden md:block">HeySolana</h1>
        </div>

        <div>
          <ul className="flex flex-row gap-x-4 backdrop-blur-lg bg-gradient-to-r from-white/10 to-black/10 border-1 border-white/20 border rounded-3xl p-2 md:px-10">
            <li>Learn</li>
            <li>Explore</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    );
}
