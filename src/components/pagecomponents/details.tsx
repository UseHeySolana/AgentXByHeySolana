"use client";

const carouselItems = [
  {
    item: "Access multiple chains in one wallet without hassle",
    image: "/pngs/carousel1.png",
    color: "#AFFFB8",
  },
  {
    item: "Manage and showcase your NFTs easily",
    image: "/pngs/audiowave.png",
    color: "#F2BAFF",
  },
  {
    item: "Swap tokens at the command of your voice",
    image: "/pngs/audiowave.png",
    color: "#FCFFC3",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/audiowave.png",

    color: "#B6B9FF",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/audiowave.png",

    color: "#D8D8D8",
  },
];
export default function DetailsSegment() {
  return (
    <div className="w-screen">
      <div className="bg-lightpink relative overflow-hidden rounded-t-[64px]">
        <div className="flex flex-col md:flex-row relative overflow-hidden">
          <div className="text-black p-10 md:p-20 w-screen bg-black/10 md:bg-transparent z-50 md:z-0  m-auto  md:m-0 md:w-[607px]">
            <h2 className="text-[32px] md:text-[64px] font-bold">Hey Solana</h2>
            <p className="text-[20px] md:text-[32px] font-[400]">
              Your AI-Powered Voice Wallet for Smarter Transactions
            </p>
            <p className="text-[16px] md:text-[18px] text-justify">
              Hey Solana is an AI-driven Solana wallet that listens and acts.
              Manage your crypto hands-free with intuitive voice commands—send,
              receive, trade, and explore market insights. With built-in AI, you
              can analyze transactions before they’re executed for smarter
              decisions. Set permissions to let the AI help you hedge funds,
              optimize investments, and keep your assets safe. Hey Solana
              combines speed, security, and intelligence in one seamless
              experience.
            </p>
          </div>
          <div className="absolute  top-0 right-0">
            <div className="absolute top-[20%] z-0">
              <img src="/pngs/voicetwo.png" alt="voicetwo" />
            </div>
            <img
              src="/pngs/microphone.png"
              className="z-10 relative"
              alt="micrphone"
            />
          </div>
        </div>
      </div>
      <div className="bg-darkpink rounded-b-[64px] overflow-hiddden py-10">
        <div className="flex flex-col md:flex-row justify-center gap-x-5 gap-y-5 md:gap-y-0 items-center overflow-hidden">
          <div className="bg-[url('/pngs/checkbalance.png')] text-[20px] md:text-[40px] bg-cover rounded-[50px] overflow-hidden h-[250px] w-11/12  md:h-[529px] md:w-[529px]">
            <div className="bg-[url('/pngs/sendcrypto.png')] bg-cover flex flex-row justify-center items-start p-10 rounded-[50px] h-[150px]  md:h-[300px] md:w-[360px] border-8 border-darkpink  ">
              <p className="">Send Crypto Instantly</p>
            </div>
            <div className="text-black font-semibold p-5 md:p-10 w-full text-center md:text-start md:w-10/12">
              Check your balance and transaction history
            </div>
          </div>

          <div className="bg-[url('/pngs/buynsell.png')] text-center md:text-start text-[20px] md:text-[40px] bg-cover relative rounded-[50px] overflow-hidden  h-[250px] w-11/12  md:h-[529px] md:w-[529px]">
            <div className="text-black font-semibold p-10 w-full md:w-10/12">
              Buy and sell digital assets
            </div>
            <div className="bg-[url('/pngs/blockchainsights.png')] absolute bottom-0 right-0 bg-cover flex flex-row justify-center items-start p-10 rounded-[50px] h-[150px]   md:h-[300px] md:w-[360px] border-8 border-darkpink  ">
              <p className="">Get blockchain and market insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
