import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";

export default function Homepage() {
  return (
    <div className="text-3xl overflow-hidden font-medium">
      <p className="ml-1">Hello! My name is </p>
      <h1 className="text-7xl font-bold">
        <LinearGradient gradient={["to bottom", "#17acff ,#ff68f0"]}>
          Haneesh Sai
        </LinearGradient>
      </h1>
      <h1 className="text-6xl">
        I am a{" "}
        <span className="font-bold text-[#6f51f7]">
          <LinearGradient gradient={["to bottom", "#17acff ,#ff68f0"]}>
            <Typewriter
              words={[
                "FULL STACK WEB DEVELOPER.",
                "GAME DEVELOPER.",
                "DISCORD BOT DEVELOPER.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </LinearGradient>
        </span>
      </h1>
      <p className="w-[70%]">
        I Create Web Applications/Websites, Video Games and their Assets,
        Discord Bots and Many More
      </p>
      <div className="w-[60%] my-10 flex justify-center">
        <a
          href="/#skills"
          className="text-xl relative px-5 py-2 border-2 border-purple-900 rounded-lg bg-purple-600 hover:bg-purple-700 bg-shadow "
        >
          My Skills &rarr;
        </a>
      </div>
    </div>
  );
}
