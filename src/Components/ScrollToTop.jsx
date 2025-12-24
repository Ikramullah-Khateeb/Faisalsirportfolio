import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: "#6EE7B7",
        color: "#062F33",
        boxShadow: "0 0 30px rgba(110,231,183,0.45)",
      }}
    >
      ↑
    </motion.button>
  );
}
