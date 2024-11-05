import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="clients">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          className="mt-2"
          direction="right"
          speed="slow"
          items={testimonials}
        />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center w-28 md:w-36 gap-2 mt-5"
            >
              <img
                src={img}
                alt={name}
                className="md:w-24 w-16 h-16 md:h-24 rounded-full object-cover border border-gray-300"
              />
              <span className="text-center text-sm md:text-base font-medium text-white-100">
                {nameImg}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
