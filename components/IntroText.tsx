import { ReactTyped } from "react-typed";
const IntroText: React.FC = () => {
  return (
    <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
      <ReactTyped
        strings={[
          "Hi, I'm Mrinal, a Mern Stack Developer based in India",
          "Self Taught Web Developer",
          "I create Dynamic web applications with modern tech",
          "React Developer",
          "FrontEnd Developer",
          "Aspiring FullStack Developer",
          "Open Source Contributor",
          "Freelance Web Developer",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default IntroText;
