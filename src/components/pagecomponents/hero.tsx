"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import Navigation from "../Navigation";
import { ArrowOutward } from "@mui/icons-material";
import { useEffect, useState } from "react";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable
);

export default function Hero() {
  const words = ["AI", "Voice"];
  const [index, setIndex] = useState(0);
  const words2 = ["Hands Free", "Secure", "Fast"];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 500; // Typing and deleting speed
  const delay = 1500; // Pause before deleting

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".changing-text", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          gsap.fromTo(
            ".changing-text",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
        },
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let typingTimeout: any;

    const handleTyping = () => {
      const currentWord = words2[wordIndex];

      if (!isDeleting) {
        // Typing effect
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          typingTimeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting effect
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words2.length);
        }
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, wordIndex]);

  useGSAP(() => {
    gsap.from(".firstImage", {
      scrollTrigger: {
        trigger: ".phoneScreen",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
      left: -150,
      duration: 1,
    });

    gsap.from(".secondImage", {
      scrollTrigger: {
        trigger: ".secondImage",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
      right: -150,
      duration: 1,
    });
  }, {});
  return (
    <div className=" bg-[url('/pngs/hero.png')] bg-cover flex flex-col justify-center items-center min-h-screen text-white">
      <div className="w-screen">
        <Navigation />
      </div>

      <div className=" text-center py-10 space-y-3 w-10/12">
        <h1 className="text-[40px] md:text-[100px] font-[500] leading-tight">
          Your <span className="min-w-[100px] changing-text">AI</span>
          ,Your Wallet
        </h1>
        <p className="text-[28px] md:text-[64px] w-10/12 m-auto md:w-full text-white/60">
          With Hey Solana It's{" "}
          <span className="text-darkpink">{displayText}</span>
        </p>
        <p className="text-[12px] md:text-[24px] w-7/12 m-auto">
          Manage your assets, trade, and get real-time insights. Just say, — Hey
          Solana.
        </p>

        <div className="py-5 flex flex-row justify-center">
          <button className="bg-gradient-to-b  w-[200px] flex flex-row items-center justify-center from-lightpink to-darkpink  border-2 border-lightpink/20 border-t-darkpink rounded-full p-2 bg-darkpink">
            Join the waitlist <ArrowOutward />
          </button>
        </div>
      </div>
      <div className="w-screen md:w-[960px]  m-auto relative phoneScreen">
        <div className="flex flex-row justify-center items-center">
          <img
            className="w-[200px] md:w-[459px]"
            src="/pngs/phone1.png"
            alt="phones"
          />
          <img
            className="w-[150px] md:w-[419px]"
            src="/pngs/phone2.png"
            alt="phones"
          />
        </div>
        <div className="relative">
          <img
            className="md:w-[1000px] absolute bottom-[-200px] md:bottom-[-400px] "
            src="/pngs/voicepulser.png"
            alt="phones"
          />
        </div>
        <div className="firstImage hover:scale-[1.3] transition-all w-fit ease-in-out absolute top-10 backdrop-blur-sm left-[-100px]">
          <img
            className="w-[366px] h-[463px]"
            src="/pngs/sendsol.png"
            alt="textImg"
          />
        </div>
        <div className="secondImage hover:scale-[1.3] transition-all ease-in-out absolute top-[30%] backdrop-blur-sm right-0 ">
          <img height={316} width={267} src="/pngs/heysol.png" alt="textImg" />
        </div>
      </div>
    </div>
  );
}
