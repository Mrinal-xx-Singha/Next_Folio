"use client"
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

// Define cursor colors
const CURSOR_COLORS = {
  h1: "bg-green-400 border-green-400",
  button: "bg-orange-500 border-orange-500",
  default: "bg-sky-500 border-sky-500",
};

// Main CustomCursor component
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState(CURSOR_COLORS.default);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS.default);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small circle cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={classNames(
          "fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-300 rounded-full w-3 h-3",
          cursorColor.split(" ")[0] // Apply only the background color
        )}
      />
      {/* Larger circle cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={classNames(
          "p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-500 rounded-full w-8 h-8",
          cursorColor.split(" ")[1] // Apply only the border color
        )}
      >
        {/* Click animation effect */}
        <div
          className={classNames(
            "w-8 h-8 rounded-full transition-all duration-500",
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0",
            cursorColor.split(" ")[0] // Apply background color for click effect
          )}
        />
      </div>
    </>
  );
};

export default CustomCursor;
