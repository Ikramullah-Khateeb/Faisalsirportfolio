import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #062F33 0%, #041F22 100%)",
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

            {/* GREEN GLOW */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at center, rgba(16,185,129,0.28), transparent 65%)",
                }}
            />

            <div className="relative z-10 custom-container py-28">

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl md:text-5xl xl:text-6xl font-semibold text-white mb-20"
                >

                    GET IN <span style={{ color: "#6EE7B7" }}>TOUCH</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT QUOTE CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.9 }}
                        className="p-10 rounded-3xl backdrop-blur-md"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.18)",
                        }}
                    >

                        <p className="text-xl md:text-2xl leading-relaxed italic text-white">
                            Technology is not just a tool; it&apos;s the canvas on which we
                            paint the future of business and humanity.
                        </p>

                        <p className="mt-6 text-sm uppercase tracking-wide" style={{ color: "#9FB8BB" }}>
                            — Faisal Qutbee
                        </p>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.6 }}
                        transition={{ duration: 0.9 }}
                        className="p-10 rounded-3xl backdrop-blur-md"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.18)",
                        }}
                    >

                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Let’s Connect
                        </h3>

                        <form className="space-y-8">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent border-b border-white/40 focus:border-[#6EE7B7] outline-none py-3 text-white placeholder:text-[#9FB8BB]"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-transparent border-b border-white/40 focus:border-[#6EE7B7] outline-none py-3 text-white placeholder:text-[#9FB8BB]"
                            />
                            <input
                                type="Contact Number"
                                placeholder="Contact Number"
                                className="w-full bg-transparent border-b border-white/40 focus:border-[#6EE7B7] outline-none py-3 text-white placeholder:text-[#9FB8BB]"
                            />

                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-transparent border-b border-white/40 focus:border-[#6EE7B7] outline-none py-3 text-white placeholder:text-[#9FB8BB] resize-none"
                            />

                            <button
                                type="submit"
                                className="mt-6 px-10 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: "#6EE7B7",
                                    color: "#062F33",
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
