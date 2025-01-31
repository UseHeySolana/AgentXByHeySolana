import Image from "next/image";

const items = [
  {
    title: "Phase 1",
    tag: "MVP Launch",
    sub_title: `
Basic voice commands for seamless transactions and token swaps.
Focus on providing a simple and intuitive user experience.
Strong blockchain integration to ensure security and efficiency.`,
    status: "completed",
  },
  {
    title: "Phase 2",
    tag: "AI Expansion",

    sub_title: `Advanced AI capabilities for improved voice recognition and reduced errors.
Introduction of multi-language support for global accessibility.
Enhanced personalization to cater to individual user preferences and behaviors.`,
    status: "completed",
  },
  {
    title: "Phase 3",
    tag: "DeFi Integration",

    sub_title: `Collaboration with DeFi protocols to enable staking, lending, and yield farming.
Seamless access to decentralized financial products through voice commands.
Expanded features for power users, including advanced analytics and real-time insights.`,
    status: "completed",
  },
  {
    title: "Phase 4",
    tag: "Ecosystem Growth",

    sub_title: `Launch marketing campaigns to onboard a wider user base.
Continuous feature development based on user feedback.
Strengthen partnerships within the Solana ecosystem to enhance platform utility.`,
    status: "active",
  },
];
export default function RoadMap() {
  return (
    <div className="bg-black/80">
      <div className="w-10/12 m-auto py-10">
        <div>
          <div>
            <h2 className="text-[40px]">Road map</h2>
            <p className="text-[#666666]">Implementation plans</p>
          </div>

          <div></div>
        </div>
        <div className="flex flex-row justify-between items-start  py-10">
          <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
            {items.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`min-w-[288px] max-w-[320px] m-auto h-[400px] border ${
                    item.status == "completed"
                      ? "border-darkpink bg-darkpink/10 "
                      : "border-green-600 bg-green-600/10"
                  } rounded-2xl p-4 pt-10  pb-10 flex flex-col hover:backdrop-blur-sm justify-between space-y-4`}
                >
                  <div>
                    <div
                      className={`rounded-full border ${
                        item.status == "completed"
                          ? "border-darkpink"
                          : "border-green-600"
                      } h-[50px] w-[50px] flex flex-row justify-center items-center`}
                    >
                      <div
                        className={`rounded-full ${
                          item.status == "completed"
                            ? "bg-darkpink"
                            : "bg-green-600"
                        }  h-[15px] w-[15px]`}
                      ></div>
                    </div>
                  </div>
                  <p className="text-[32px] font-[500] h-[50px]">
                    {item.title}
                  </p>
                  <p className="text-footergrey font-bold text-[20px]">
                    {item.tag}
                  </p>
                  <p className="text-[#666666] h-[150px]">{item.sub_title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
