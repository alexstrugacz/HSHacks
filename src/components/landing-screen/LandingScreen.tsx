
import Video from "../../assets/code.mp4";
import * as React from "react"
import { motion } from "framer-motion";
import HSHacksLogo from "../shared/HSHacksLogo";
import SponsorsList from "./SponsorsList";
const LandingScreen: React.FC<{}> = (props) => {
    return (
        <div className={"bg-neutral-900"}>
            <div className={"relative bg-cyan-90 bg-opacity-40 h-screen overflow-hidden"}>
                <video
                    muted
                    autoPlay
                    playsInline
                    loop
                    className={"absolute min-w-full min-h-full max-h-none blur-md max-w-none z-2 transition-all opacity-20 opacity-10"}
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
                    <div>
                        <h4
                            className={"text-[#5BC0DE] text-5xl font-Poppins font-bold"}>
                            Welcome to
                        </h4>
                        <div className={"flex items-center gap-5 mt-2"}>
                            <HSHacksLogo className={"h-[6rem] -mr-2"} />
                            <h1
                                className="text-white font-bold text-8xl font-Poppins mt-0">HSHacks
                            </h1>
                        </div>
                        <SponsorsList />

                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingScreen