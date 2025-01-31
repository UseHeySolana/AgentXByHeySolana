"use client";

const carouselItems = [
  {
    item: "Access multiple chains in one wallet without hassle",
    image: "/pngs/carousel1.png",
    color: "#AFFFB8",
  },
  {
    item: "Manage and showcase your NFTs easily",
    image: "/pngs/carousel/profile.png",
    color: "#F2BAFF",
  },
  {
    item: "Swap tokens at the command of your voice",
    image: "/pngs/carousel/swap.png",
    color: "#FCFFC3",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/carousel1.png",
    color: "#B6B9FF",
  },
  {
    item: "Get market insights, just start with “Hey Solana”",
    image: "/pngs/carousel/swap.png",
    color: "#D8D8D8",
  },
];
export default function CarouselSegment() {
  return (
    <div className="w-screen z-50 relative">
      <div className="md:space-y-10">
        <div className="relative w-10/12 m-auto  flex flex-row justify-between items-center">
          <div className="bg-darkpink rounded-3xl p-2 text-white">
            <h2>Still your wallet but on steriods</h2>
          </div>
          <div className="bg-white/30 backdrop-blur-sm"></div>
        </div>

        <div className="overflow-x-scroll md:w-10/12 m-auto py-10  relative ">
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5 p-2 relative  ">
            {carouselItems.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`h-[400px] overflow-hidden relative w-11/12 m-auto md:min-width-[300px] rounded-2xl px-5 text-black `}
                  style={{ backgroundColor: item.color }}
                >
                  <div className="py-10 text-[24px]">{item.item}</div>

                  <div
                    className={`${
                      index == 1 && "scale-[1.5]"
                    } bottom-0 left-0 flex flex-row justify-center w-full m-auto
                     absolute`}
                  >
                    <img className={``} src={item.image} alt={item.image} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
