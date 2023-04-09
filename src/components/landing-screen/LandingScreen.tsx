
import Video from "../../assets/code.mp4";
import * as React from "react"
import { motion } from "framer-motion";
const LandingScreen: React.FC<{}> = (props) => {
    return (
        <div className={"bg-neutral-900"}>
            <div className={"relative bg-cyan-90 bg-opacity-40 h-screen overflow-hidden"}>
                <video
                    muted
                    autoPlay
                    playsInline
                    loop
                    className={"absolute min-w-full min-h-full max-h-none blur-sm md:blur-md max-w-none z-2 transition-all opacity-20 md:opacity-10"}
                >
                    <source
                        src={Video}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute top-0 flex flex-col justify-center items-start px-10 text-left w-full h-screen pt-10">
                <div className={"flex items-center justify-between w-full max-w-6xl md:px-14 pr-20 mx-auto mb-10"}>
                    <div className={""}>
                        <motion.h4
                            initial={{ opacity: 0, x: -100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className={"text-[#5BC0DE] text-5xl md:text-6xl font-Poppins font-bold"}>
                            Welcome to
                        </motion.h4>
                        <motion.h1
                            initial={{ opacity: 0, x: -100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="text-white font-bold text-5xl md:text-6xl font-Poppins mt-0">HSHacks!!
                        </motion.h1>
                    </div>
                    <img className={"h-30 mb-5"} src={"https://emojis.slackmojis.com/emojis/images/1643514977/10031/60fps_parrot.gif?1643514977"} />
                </div>
            </div>
        </div>
    );
}
export default LandingScreen