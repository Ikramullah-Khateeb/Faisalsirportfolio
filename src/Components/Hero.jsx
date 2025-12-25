import { useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/faisal.jfif";

export default function Hero() {
  useEffect(() => {
    console.log("Hero section loaded");
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center py-12 md:py-20">
      
      {/* GREEN CENTER GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-green-500/20 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Where Innovation Meets Ideas
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Helping businesses thrive with innovative digital strategies,
            creative solutions, and measurable outcomes.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm md:text-base"
            >
              Book a call
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500/10 transition-colors text-sm md:text-base"
            >
              Learn more
            </motion.button>
          </div>

          {/* STATS */}
          <div className="hidden md:flex gap-8 mt-12">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">150+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex-1 flex items-center justify-center"
        >
          {/* ROTATING SQUARE */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] border-2 border-green-500/30 rounded-3xl"
          />

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <img
              src={hero}
              alt="Faisal Qutbee"
              className="w-full h-full object-cover"
            />

            {/* NAME OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Faisal Qutbee
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-green-400">
                Business Advisory & Strategy
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SUBTLE DIVIDER */}
      <div className="w-full h-[2px] bg-white/20 mt-12" />
    </section>
  );
}
