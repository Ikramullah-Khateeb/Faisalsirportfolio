import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
        >
          {/* GREEN GLOW (same as Hero center glow) */}
          <div className="absolute w-32 h-32 bg-green-500/20 rounded-full blur-[40px]" />

          {/* BUTTON */}
          <motion.button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative
              w-14 h-14
              rounded-full
              flex items-center justify-center
              bg-black
              border border-green-500/40
              text-green-400
              backdrop-blur-md
            "
          >
            ↑
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
