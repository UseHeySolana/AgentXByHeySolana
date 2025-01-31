"use client";
const BeforeFooter = () => {
  return (
    <div className="md:grid md:grid-cols-2   overflow-hidden md:h-[500px] w-screen  pt-10 m-auto justify-center items-center bg-black">
      <div className="justify-center flex flex-col md:flex-row items-center bg-black ">
        <h2 className="text-[24px] md:text-[32px] w-11/12 md:w-7/12">
          Whether you're a crypto novice or a seasoned trader, Hey Solana’s
          intuitive design makes crypto management accessible for everyone.
        </h2>
      </div>
      <div className="bg-black">
        <img src="/pngs/bluemural.png" alt="bluemural" />
      </div>
    </div>
  );
};

export default BeforeFooter;
