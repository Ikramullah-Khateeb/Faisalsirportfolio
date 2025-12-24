import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Advisory() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-linked motion (reversible)
  const xLeft = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const yStatsSlow = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yStatsFast = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible"
      style={{
        background: "linear-gradient(180deg, #062F33 0%, #083B40 100%)",
      }}
    >
      {/* GREEN CENTER GLOW */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 65%)",
        }}
      />

      {/* TOP DIVIDER */}
      <div
        className="absolute top-16 left-0 w-full h-[2px] z-[5]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(110,231,183,0.75), transparent)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 custom-container py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div style={{ x: xLeft }}>
            <h4 className="text-lg text-white font-medium mb-3">
              Business and Advisory Consulting
            </h4>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-white leading-tight">
              REAL Growth.
              <br />
              <span style={{ color: "#6EE7B7" }}>Strategic Impact.</span>
            </h2>

            <p
              className="mt-6 text-base md:text-lg max-w-xl"
              style={{ color: "#9FB8BB" }}
            >
              With experience in large-scale government projects across the UAE,
              I offer business advisory and consulting services to individuals
              and organizations looking to establish or expand their presence
              in the Middle East. Whatever industry you come from, I am here to
              support you at every step.
            </p>

            <div className="mt-10">
              <button
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#6EE7B7",
                  color: "#062F33",
                }}
              >
                Book a call
              </button>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* TOP CARD */}
            <motion.div
              style={{ y: yStatsFast }}
              className="sm:col-span-2 p-8 rounded-3xl backdrop-blur-md text-white"
            >
              <h3 className="text-4xl font-semibold">$100M+</h3>
              <p className="mt-2 text-sm" style={{ color: "#9FB8BB" }}>
                Large-Scale Projects Worth
              </p>
            </motion.div>

            {/* LEFT */}
            <motion.div
              style={{ y: yStatsSlow }}
              className="p-7 rounded-3xl backdrop-blur-md text-white"
            >
              <h3 className="text-3xl font-semibold">8+</h3>
              <p className="mt-2 text-sm" style={{ color: "#9FB8BB" }}>
                Industries Worked Across
              </p>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              style={{ y: yStatsSlow }}
              className="p-7 rounded-3xl backdrop-blur-md text-white"
            >
              <h3 className="text-3xl font-semibold">7+</h3>
              <p className="mt-2 text-sm" style={{ color: "#9FB8BB" }}>
                Countries Served
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
