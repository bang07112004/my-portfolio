import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [spotlightOn, setSpotlightOn] = useState(true);
  const lightOff = () => {
    setSpotlightOn(false);
    localStorage.setItem("spotlightOn", "false");
  };
  const lightOn = () => {
    setSpotlightOn(true);
    localStorage.setItem("spotlightOn", "true");
  };
  useEffect(() => {
    const spotlightState = localStorage.getItem("spotlightOn");
    if (spotlightState === "false") {
      setSpotlightOn(false);
    }
  }, []);
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddingX} max-w-7x; absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 z-10 -mt-5 "
        >
          {spotlightOn ? (
            <button
              onClick={lightOff}
              className="mx-4 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-gray-800 bg-clip-text text-transparent"
            >
              <div className="relative">
                <FaSun className="select-none text-3xl text-yellow-400" />
                <span className="absolute top-0 left-0 right-0 bottom-0 select-none rounded-full bg-yellow-400 opacity-50 blur-xl brightness-200" />
              </div>
              <h1 className="select-none text-2xl font-bold">Light On</h1>
            </button>
          ) : (
            <button
              onClick={lightOn}
              className="mx-4 flex items-center gap-2 bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent"
            >
              <div className="relative ">
                <FaMoon className="select-none text-3xl text-white" />
                <span className="absolute top-0 left-0 right-0 bottom-0 select-none rounded-full bg-white opacity-50 blur-xl  brightness-125" />
              </div>
              <h1 className="select-none text-2xl font-bold">Light Off</h1>
            </button>
          )}
        </motion.div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div className="relative">
          <h1 className={`${styles.heroHeadText} select-none text-white`}>
            Hi I'm <span className="text-[#915eff]">Bang</span>
          </h1>
          <p
            className={`${styles.heroSubText} my-3 min-h-[10px] select-none text-white-100`}
          >
            <Typewriter
              words={[
                "I am newbie in technologies",
                "Especially in programming Language",
                "This is the 3D application ",
                "based on the instruction on Youtube",
                "I added more things into this website",
                "This typing effect is an example",
                "I can use this as my portfolio.",
              ]}
              loop={1}
              typeSpeed={20}
              deleteSpeed={20}
            />
          </p>
        </div>
      </div>

      <ComputersCanvas spotlightOn={spotlightOn} />
      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
