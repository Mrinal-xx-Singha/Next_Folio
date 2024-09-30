import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  opacity?: string | number;
  blurRadius?: string | number;
  width?: string | number;
  height?: string | number;
};

export const Spotlight = ({
  className,
  fill = "white",
  opacity = 0.21,
  blurRadius = 151,
  width = "138%",
  height = "169%",
}: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]",
        `h-[${height}] w-[${width}] lg:w-[84%] opacity-0`,
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spotlightFilter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity={opacity}
        ></ellipse>
      </g>
      <defs>
        <filter
          id="spotlightFilter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation={blurRadius}
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
