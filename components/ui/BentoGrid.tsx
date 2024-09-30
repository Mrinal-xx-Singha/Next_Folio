"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
// import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { setTimeout } from "timers";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);

  const resumeLink =
    "https://drive.google.com/file/d/1SiBL-vcrdLL4QdAVDmxlGKjsB9dIC2-p/view?usp=drive_link";

  const handleCopyResume = () => {
    navigator.clipboard
      .writeText(resumeLink)
      .then(() => {
        setCopiedResume(true);
        setTimeout(() => {
          setCopiedResume(false);
        }, 2000); //reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.log("Failed to coppy: ", err);
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("mrinalsingha17@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        " row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(10, 10, 10)", // A solid blackish base color
        backgroundImage:
          "linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(30,30,30,1) 26%, rgba(15,15,15,1) 100%)", // Updated black gradient
      }}
    >
      {/* img dives */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center opacity-60"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation className="absolute z-50 flex items-center justify-center text-white font-bold " />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack */}

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-2">
                {["React.js", "Next.js", "Typescript"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#121111]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#121111]"></span>
              </div>
              <div className="flex flex-col md:gap-3 gap-3 lg:gap-2">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#121111]"></span>

                {["Express", "MongoDB", "Javascript"].map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#121111]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative ">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,

                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <div>
                <MagicButton
                  title={copied ? "Email Copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#121111]"
                  handleClick={handleCopy}
                />
                <MagicButton
                  title={copiedResume ? "Resume Copied" : "Copy my resume"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#121111]"
                  handleClick={handleCopyResume}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
