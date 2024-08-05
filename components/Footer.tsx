
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">

      {/* content */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take ?<span className="text-purple ">Your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me to today and let&apos;s discuss how i can help you
          achieve your goals
        </p>

        <a href="mailto:mrinalsingha17@gmail.com">
          <MagicButton
            title="Lets's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mrinal Singha
        </p>
      </div>

      <div className="flex  items-center justify-center md:gap-3 lg:gap-6 md:mb-5">
        {socialMedia.map((profile) => (
          <div
            key={profile.id}
            className="mt-6 w-10 h-10 cursor-pointer flex justify-center  backdrop-blur-lg backdrop-filter saturate-100 bg-opacity-75 bg-black-200
            border-black-300 border rounded-lg items-center
            "
          >
            <Link  href={profile.link}>
            <img src={profile.img} alt="icons" width={20} height={20} />
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
