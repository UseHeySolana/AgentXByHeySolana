"use client";

export const features = [
  {
    title: "Safety and Privacy",
    text: "Your security comes first. With end-to-end encryption and user-controlled permissions, your assets and data are always safe and private.",
    image: "/pngs/items/ai.png",
  },
  {
    title: "Artificial Intelligence",
    text: "Smarter decisions made simple. Leverage AI to analyze transactions, manage risks, and optimize your crypto portfolio effortlessly.",
    image: "/pngs/items/security.png",
  },
  {
    title: "Lightening Speed",
    text: "Fast and frictionless. Experience blazing-fast transactions that keep you ahead of the market.",
    image: "/pngs/items/speed.png",
  },
];
const MainFeature = () => {
  return (
    <div className="py-10 w-10/12 m-auto">
      <div className="flex flex-col md:flex-row  gap-x-5 gap-y-5 md:gap-y-0 justify-center items-start">
        {features.map((item: any, index: number) => {
          return (
            <div
              key={index + item.title}
              className="min-w-[200px] h-fit  overflow-hidden relative rounded-3xl"
            >
              <div className="top-0">
                <img
                  src={item.image}
                  alt={item.image}
                  className="object-cover"
                />
              </div>
              <div className="bottom-20 md:bottom-10 absolute p-5 h-[150px] ">
                <h2 className="text-[32px] font-bold">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainFeature;
