"use client";
import {
  Add,
  ArrowDownward,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Remove,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const landingfaqs = [
  {
    title: "What's HeySolana?",
    text: "The Pump Militia Airdrop is all about rewarding early supporters and players by giving them ways to mine $PUMP from their mobile phones before TGE.It's designed to reward early members, engage and incentivise users while driving adoption within the community.",
  },
  {
    title: "Who is eligible to mine $PUMP?",
    text: "Everyone with an access to a mobile phone.",
  },
  {
    title: "When can I withdraw my mined $PUMP?",
    text: "Mined $PUMP balances would be availabe for withdrawal at TGE. you can also statke your $PUMP tokens and earn rewards.",
  },
  {
    title: "What Blockchain Network is used?",
    text: "The Pump Militia ecosystem is built on the Solana Network.",
  },
];
const Faqs = () => {
  let path = usePathname();
  const [selectedFaq, setSelectedFaq] = useState(0);
  const faqs = landingfaqs;
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 m-auto md:flex-row  justify-center items-start md:space-x-24 py-5 md:py-10">
      <div className="">
        <div className="flex flex-col md:space-y-4">
          <div className="font-daysans text-[32px]">FAQs</div>

          <div className=" text-[16px] md:text-[32px] w-7/12 md:w-[300px]">
            Find your answers here
          </div>

          <div className="space-y-5 hidden md:inline">
            <div className="font-sans text-vivd-lime-green-10 text-sm md:w-[400px]">
              If there are any questions not answered here, please join the
              Discord community to request for further assistance.
            </div>

            <button className="border buttonTracker border-darkpink rounded-xl px-6 py-3 w-fit">
              <a
                href="https://discord.com/invite/tvZGAP4Qt8"
                target="_blank"
                className="font-sans buttonTracker text-vivd-lime-green-10 text-sm"
              >
                Join Discord Community
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full my-5">
        {faqs.map((item: any, index: number) => {
          return (
            <Accordion
              key={index}
              onChange={() => {
                setSelectedFaq(index);
              }}
              expanded={selectedFaq == index ? true : false}
              defaultExpanded={index == 0 ? true : false}
              sx={{ background: "#ffffff10", boxShadow: "0px" }}
              className="border-0 border-[#52594B]"
            >
              <AccordionSummary
                className="bg-white"
                expandIcon={
                  selectedFaq == index ? (
                    <KeyboardArrowUp className="text-white" />
                  ) : (
                    <KeyboardArrowDown className="text-white" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <hr />
                <Typography className="text-[16px] text-white font-bold md:text-[32px]">
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-white">{item.text}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>

      <div className="space-y-5 md:hidden">
        <div className="font-sans text-vivd-lime-green-10 text-sm md:w-[400px]">
          If there are any questions not answered here, please join the Discord
          community to request for further assistance.
        </div>

        <button className="border buttonTracker border-darkpink rounded-xl px-6 py-3 w-fit">
          <a
            href="https://discord.com/invite/tvZGAP4Qt8"
            target="_blank"
            className="font-sans buttonTracker text-vivd-lime-green-10 text-sm"
          >
            Join Discord Community
          </a>
        </button>
      </div>
    </div>
  );
};

export default Faqs;
