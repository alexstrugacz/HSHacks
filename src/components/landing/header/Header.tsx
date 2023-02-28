import { motion } from "framer-motion";
import MapPinIcon from "@heroicons/react/24/solid/MapPinIcon";
import React from "react";

import Video from "../assets/code.mp4";
import { useNavigate } from "react-router-dom";
import { REGISTER_LINK } from "../../../global/links";
import RegisterButton from "../../../global/RegisterButton";
import JoinTheDiscord from "../../../global/JoinTheDiscord";
import { CalendarIcon, WrenchIcon } from "@heroicons/react/24/solid";

const Header: React.FC<{}> = () => {
    const openHerseyLink = () => {
        const url = "https://www.google.com/maps/place/John+Hersey+High+School/@42.0896973,-87.9250359,15z/data=!4m5!3m4!1s0x880fbbad9a8cbbcd:0xbc3eb41efde43b5f!8m2!3d42.1038234!4d-87.9590565";
        window.open(url, "_blank");
    }

    const navigate = useNavigate();

    const handleOpenSponsorPage = () => {
        navigate("/sponsors");
    }

    return (
        <div className={"bg-neutral-900"}>
            <div className={"relative bg-cyan-90 bg-opacity-40 h-screen min-h-[800px] overflow-hidden"}>
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
                <div className="absolute top-0 flex flex-col justify-center items-start pl-5 md:pl-10 text-left w-full h-screen min-h-[800px] pt-10">
                    <div className={" w-full max-w-6xl md:px-14 mx-auto mb-10"}>
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
                                className="text-white font-bold text-5xl md:text-6xl font-Poppins mt-0">HSHacks.
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                            >
                                <p className="text-slate-300 text-md md:text-xl pr-5 font-Poppins pt-2 md:pt-5 max-w-xl">Build projects for a nonprofit, make new friends, and have a blast at the <a className={"text-white font-bold"}>HSHacks Hackathon!</a></p>
                                <div className="mt-5 md:mt-7">
                                    <div onClick={openHerseyLink} className="group flex gap-1 mr-16 items-center hover:cursor-pointer w-fit">
                                        <MapPinIcon className={"w-6 text-white group-hover:text-zinc-400 transition-colors"} />
                                        <h2 className="font-bold text-white font-Poppins group-hover:text-zinc-400 transition-colors text-md md:text-xl mb-0">John Hersey High School ARC</h2>
                                    </div>
                                    <div className="flex mt-2 md:mt-3 gap-1">
                                        <CalendarIcon className={"w-6 text-white"} />
                                        <h2 className="font-bold text-white font-Poppins text-md md:text-xl">April 15, 2023</h2>
                                    </div>
                                </div>
                                <JoinTheDiscord />
                                <RegisterButton />
                                {/* <FullButton
                                    startColor={"#E96C2Eff".toLowerCase()}
                                    endColor={"#CF424Eff".toLowerCase()}
                                    text={"Register Now (Free)"}
                                    link={REGISTER_LINK}
                                /> */}
                                <p onClick={handleOpenSponsorPage} className={"mt-4 text-gray-300 font-Poppins"}>Interested in sponsoring? <a className={"text-cyan-400 hover:text-cyan-200 hover:cursor-pointer transition-colors"}>Click here!</a></p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Header;