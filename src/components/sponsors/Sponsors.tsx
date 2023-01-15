import * as React from "react"
import { motion } from "framer-motion";
import NavbarWrapper from "../navbar/NavbarWrapper";
import Video from "../landing/assets/FRN_videoClip_AAJ2767_hover.mp4";
import SponsorContent from "./SponsorContent";
const Sponsors: React.FC<{}> = (props) => {
    return (
        <div>
            <NavbarWrapper>
                <div className={"bg-neutral-900"}>

                    <div className={"relative bg-cyan-90 bg-opacity-40 h-screen overflow-hidden"}>
                        <motion.video
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0.3, x: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            muted
                            autoPlay
                            playsInline
                            loop
                            className={"absolute min-w-full min-h-full max-h-none blur-sm max-w-none z-2 transition-all"}
                        >
                            <source
                                src={Video}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </motion.video>
                        <div className="absolute top-0 flex flex-col justify-center items-start md:pl-10 text-left w-full h-screen pt-10">
                            <div className={" w-full max-w-6xl md:px-14 px-5 mx-auto"}>
                                <div className={""}>
                                    <motion.h4
                                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className={"text-red-500 text-3xl md:text-5xl font-Poppins font-bold"}>
                                        Sponsorships at
                                    </motion.h4>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                        className="text-white font-bold text-4xl md:text-7xl font-Poppins mt-0">Innovate Chicago
                                    </motion.h1>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <SponsorContent />
            </NavbarWrapper>
        </div>
    );
}
export default Sponsors