import Image from "next/image";

const items = [
  {
    title: "Non-custodial storage",
    sub_title: "You have full control of your private keys.",
    image: "/gifs/phoneunlock.gif",
    bgcolor: "#E8FFCA",
  },
  {
    title: "Biometric and passcode protection",
    sub_title: "Multi-layer security for peace of mind.",
    image: "/gifs/fingerprint.gif",
    bgcolor: "#223806",
  },
  {
    title: "Privacy-first voice technology",
    sub_title: "Your commands are saved locally for maximum security.",
    image: "/gifs/phonefolder.gif",
    bgcolor: "#E8FFCA",
  },
];
export default function Security() {
  return (
    <div className="bg-black/80">
      <div className="w-10/12 m-auto py-5 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start  py-10">
          <div className="md:min-w-[389px] p-3">
            <h5 className="text-[40px]">Your Security Is Our Priority</h5>
            <p className="text-[24px]">Fast, Secure and Built for Solana</p>
            <p className="text-[18px] text-[#666666]">
              Designed for Solana's lightning-fast & secure blockchain network.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start space-y-3 md:space-y-0">
            {items.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="min-w-[205px] hover:bg-white/10 backdrop-blur-sm p-2 flex flex-row md:flex-col justify-between items-center md:items-start space-x-4 md:space-y-5 rounded-2xl"
                >
                  <div
                    className="max-w-[100px] md:w-[100px] h-[100px] rounded-2xl"
                    style={{ backgroundColor: item.bgcolor }}
                  >
                    <img src={item.image} alt={item.image} />
                  </div>
                  <div>
                    <p className="text-[20px] font-[500] h-[50px] mb-2">
                      {item.title}
                    </p>
                    <p className="text-[#666666]">{item.sub_title}</p>
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
