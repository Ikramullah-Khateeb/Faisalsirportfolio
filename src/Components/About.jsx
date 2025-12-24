import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Scroll-based horizontal movement
    const xSlow = useTransform(scrollYProgress, [0, 1], [120, -120]);
    const xMedium = useTransform(scrollYProgress, [0, 1], [160, -160]);
    const xFast = useTransform(scrollYProgress, [0, 1], [200, -200]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #083B40 0%, #062F33 100%)",
            }}
        >
            {/* TOP DIVIDER */}
            <div
                className="absolute top-0 left-0 w-full h-[2px] z-[5]"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(110,231,183,0.75), transparent)",
                }}
            />

            {/* CENTER GLOW */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at center, rgba(16,185,129,0.25), transparent 65%)",
                }}
            />

            {/* CONTENT */}
            <div className="relative z-10 custom-container py-32 space-y-28">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >

                    <h4 className="text-lg text-white mb-4">About Me</h4>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight">
                        Experience that
                        <br />
                        <span style={{ color: "#6EE7B7" }}>Drives Results.</span>
                    </h2>
                </motion.div>

                {/* CARD 1 */}
                <motion.div
                    style={{ x: xSlow }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl p-12 rounded-[32px] backdrop-blur-xl"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >

                    <h3 className="text-3xl font-semibold text-white mb-6">
                        Strategic Advisory Background
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#9FB8BB" }}>
                        I have worked on complex, high-value initiatives across government
                        and private sectors in the UAE. My role has consistently focused on
                        aligning strategy, execution, and measurable outcomes for long-term growth.
                    </p>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                    style={{ x: xMedium }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl ml-auto p-12 rounded-[32px] backdrop-blur-xl"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >

                    <h3 className="text-3xl font-semibold text-white mb-6">
                        Regional Expertise
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#9FB8BB" }}>
                        Deep understanding of Middle East markets, regulatory environments,
                        and cultural dynamics allows me to guide businesses confidently
                        through expansion, compliance, and market entry.
                    </p>
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                    style={{ x: xFast }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl p-12 rounded-[32px] backdrop-blur-xl"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >

                    <h3 className="text-3xl font-semibold text-white mb-6">
                        Hands-On Growth Partner
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#9FB8BB" }}>
                        I work closely with founders, executives, and leadership teams to
                        turn vision into execution — providing clarity, structure, and
                        actionable strategies that scale.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
