import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import card1 from "../assets/card1.jfif";
import card2 from "../assets/card2.jfif";
import card3 from "../assets/card3.jfif";


export default function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll for large screens
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <section ref={sectionRef} className="relative w-full">
      
      {/* LARGE SCREEN HORIZONTAL CARDS */}
      <div className="hidden lg:block h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-black">
          
          {/* GREEN CENTER GLOW */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[150px]" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full">
            {/* HEADING */}
            <div className="px-10 max-w-3xl mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 mb-4 bg-green-500/10 border border-green-500/30 rounded-full"
              >
                <span className="text-green-400 text-sm font-semibold tracking-wider uppercase">
                  About Me
                </span>
              </motion.div>
              <h2 className="text-5xl xl:text-6xl font-bold text-white leading-tight">
                Experience that <br />
                <span className="text-green-400">Moves Forward.</span>
              </h2>
            </div>

            {/* HORIZONTAL CARDS */}
            <motion.div style={{ x }} className="flex w-[300vw]">
              <Card
                title="Strategic Advisory"
                img={card1}
                text="I help businesses and governments accelerate growth by aligning technology, strategy, and execution. With experience in large-scale digital transformation, AI-powered solutions, and multinational projects, I deliver measurable impact and scalable outcomes."
              />
              <Card
                title="Regional Expertise"
                img={card2}
                text="Extensive experience working across the UAE and international markets, navigating regulatory frameworks, cultural dynamics, and cross-functional collaboration to deliver successful projects and strategic outcomes."
              />
              <Card
                title="Growth Partner"
                img={card3}
                text="Collaborates closely with founders, executives, and teams to transform innovative ideas into scalable businesses and measurable impact across technology-driven projects."
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SMALL SCREEN VERTICAL STACK */}
      <div className="lg:hidden relative min-h-screen w-full overflow-hidden bg-black py-12 md:py-20">
        {/* GREEN CENTER GLOW */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">

          {/* HEADING */}
          <div className="mb-8 md:mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-4 bg-green-500/10 border border-green-500/30 rounded-full"
            >
              <span className="text-green-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                About Me
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Experience that <br />
              <span className="text-green-400">Moves Forward.</span>
            </h2>
          </div>

          {/* STACKED CARDS WITH ANIMATION */}
          <div className="space-y-6 md:space-y-8">
            <MobileCard
              title="Strategic Advisory"
              img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              text="I help businesses and governments accelerate growth by aligning technology, strategy, and execution. With experience in large-scale digital transformation, AI-powered solutions, and multinational projects, I deliver measurable impact and scalable outcomes."
            />
            <MobileCard
              title="Regional Expertise"
              img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
              text="Extensive experience working across the UAE and international markets, navigating regulatory frameworks, cultural dynamics, and cross-functional collaboration to deliver successful projects and strategic outcomes."
            />
            <MobileCard
              title="Growth Partner"
              img="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              text="Collaborates closely with founders, executives, and teams to transform innovative ideas into scalable businesses and measurable impact across technology-driven projects."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* LARGE CARD */
function Card({ title, img, text }) {
  return (
    <div className="w-screen h-[520px] px-16">
      <div className="w-full h-full rounded-[36px] overflow-hidden backdrop-blur-xl flex bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 shadow-2xl">
        <div className="w-1/2 h-full">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-14 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
          <p className="text-xl text-gray-300 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* MOBILE CARD */
function MobileCard({ title, img, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 shadow-xl"
    >
      <div className="w-full h-48 sm:h-56 md:h-64">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
