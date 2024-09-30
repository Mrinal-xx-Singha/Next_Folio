import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-black-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to take <span className="text-purple">Your</span> digital
            presence to the next level?
          </h2>
          <p className="text-white-200 mb-8 max-w-2xl">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:mrinalsingha17@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-white-200 mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Mrinal Singha
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialMedia.map((profile) => (
              <Link
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-black-200 hover:bg-black-300 transition-colors duration-300"
              >
                <img
                  src={profile.img}
                  alt={`${profile.id} icon`}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
