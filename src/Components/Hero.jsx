import { useEffect } from "react";
import { motion } from "framer-motion";
import faisal from "../assets/faisal.jfif";




export default function Hero() {
  useEffect(() => {
    console.log("Hero section loaded");
  }, []);

  return (
<section
  className="relative w-full overflow-visible"
  style={{ backgroundColor: "#062F33" }}
>

  {/* GREEN CENTER GLOW */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 65%)",
    }}
  />

  {/* CONTENT WRAPPER */}
  <div className="relative z-10">
    {/* your existing section content here */}
  </div>
  <div className="custom-container pt-14 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-white"
>

    Where Innovation
    <br /> Meets Ideas
  </motion.h1>

 <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mt-6 max-w-lg text-base md:text-lg"
  style={{ color: "#9FB8BB" }}
>

    Helping businesses thrive with innovative digital strategies,
    creative solutions, and measurable outcomes.
  </motion.p>

  {/* BUTTONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="flex gap-4 mt-10"
>


    <button
      className="px-7 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: "#6EE7B7",
        color: "#062F33",
      }}
    >
      Book a call
    </button>

    <button
      className="px-7 py-3 rounded-full backdrop-blur-md transition-all duration-300 text-white hover:scale-105"
      style={{
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      Learn more
    </button>
  </motion.div>

  {/* SLIDER — NOW CORRECT */}

</motion.div>

      {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<motion.div
  className="relative flex justify-center items-center"
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: false, amount: 0.6 }}
  transition={{ duration: 1 }}
>

  {/* CONTINUOUS CLOCKWISE MOVING SQUARE */}
  <motion.div
    className="absolute w-[460px] h-[460px] rounded-[42px]"
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 20,       // slow & premium
      repeat: Infinity,
      ease: "linear",     // IMPORTANT for smooth rotation
    }}
    style={{
      background:
        "linear-gradient(135deg, rgba(110,231,183,0.18), rgba(6,47,51,0.65))",
      border: "1px solid rgba(110,231,183,0.35)",
      boxShadow: "0 0 120px rgba(110,231,183,0.18)",
    }}
  />

  {/* IMAGE — MOVES ONLY ON HOVER */}
  <motion.div
    className="relative z-10 w-[420px] h-[420px] rounded-[36px] overflow-hidden"
    whileHover={{
      y: -18,
      scale: 1.04,
    }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 12,
    }}
    style={{
      border: "2px solid rgba(110,231,183,0.6)",
      boxShadow: "0 35px 80px rgba(0,0,0,0.55)",
    }}
  >
    <img
      src={faisal}
      alt="Faisal"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* NAME OVERLAY */}
  <div
    className="absolute bottom-6 left-6 z-20 px-6 py-3 rounded-2xl backdrop-blur-md"
    style={{
      backgroundColor: "rgba(0,0,0,0.55)",
      border: "1px solid rgba(255,255,255,0.18)",
    }}
  >
    <p className="text-white font-semibold text-sm">
      Faisal Qutbee
    </p>
    <p className="text-xs mt-0.5" style={{ color: "#6EE7B7" }}>
      Business Advisory & Strategy
    </p>
  </div>
</motion.div>


    </div>
  </div>
</section>

  );
}
