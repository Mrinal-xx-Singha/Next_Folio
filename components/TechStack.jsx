import React from "react";
import Image from "next/image";
 
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
 

const TechStack = () => {
  const techStack = [
    { id: 1, image: "/javascript.svg", label: "JavaScript" },
    { id: 2, image: "/mongodb.svg", label: "MongoDB" },
    { id: 3, image: "/nodejs.svg", label: "Node.js" },
    { id: 4, image: "/re.svg", label: "React" },
    { id: 5, image: "/express-js.svg", label: "Express" },
    { id: 6, image: "/next.svg", label: "Next.js" },
    { id: 7, image: "/tail.svg", label: "Tailwind CSS" },
    { id: 8, image: "/neon.svg", label: "Neon" },
    { id: 9, image: "/c.svg", label: "Clerk" },
    { id: 10, image: "/drizzle.svg", label: "Drizzle" },
    { id: 11, image: "/lucid.svg", label: "Lucid" },
    { id: 12, image: "/elephant.png", label: "Postgres" },
    { id: 13, image: "/ts.svg", label: "TypeScript" },
    { id: 14, image: "/fm.svg", label: "Framer Motion" },
    { id: 15, image: "/appwrite.svg", label: "Appwrite" },
    { id: 16, image: "/material-ui.svg", label: "Material UI" },
    { id: 17, image: "/three.svg", label: "Three.js" },
    { id: 18, image: "/socket.svg", label: "Socket.io" },
  ];

  return (
    <section id="techstack" className="bg-gray-900 py-16 w-full">
      <div className="flex flex-col items-center h-full px-6 py-3 mt-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-12">
          My Tech{" "}
          <span className="text-purple">
            Stack
          </span>
        </h1>

        <ScrollArea  className="w-full max-w-4xl rounded-lg shadow-lg border border-gray-700 p-6 bg-gray-800 mt-10">
          <div className="flex space-x-4 gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scroll-smooth">
            {techStack.map((tech) => (
              <figure
                key={tech.id}
                className="flex-none w-32 sm:w-40 md:w-48 flex flex-col items-center space-y-2 transform hover:scale-105 transition duration-300 ease-in-out bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 flex justify-center items-center overflow-x-scroll">
                  <Image
                    src={tech.image}
                    alt={tech.label}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-white text-sm font-medium text-center">
                  {tech.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />

        </ScrollArea>
      </div>
    </section>
  );
};

export default TechStack;
