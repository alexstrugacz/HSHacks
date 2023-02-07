import * as React from "react"
import { motion } from "framer-motion";
import NavbarWrapper from "../navbar/NavbarWrapper";
import Video from "../landing/assets/code.mp4";
import SponsorContent from "./SponsorContent";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const Sponsors: React.FC<{}> = (props) => {
    const [isTransparent, setIsTransparent] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            const location = window.scrollY;
            const show = location < 250;
            if (show) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };
        handleScroll()
        document.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>
            <NavbarWrapper>
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
                        <div className="absolute top-0 flex flex-col justify-center items-start md:px-10 text-left w-full h-screen pt-10">
                            <div className={"flex-1"}></div>
                            <div className={" w-full max-w-6xl md:px-14 px-5 mx-auto mb-10"}>
                                <div className={""}>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ delay: 0, duration: 0.5 }}
                                        className="text-white font-bold text-4xl md:text-7xl font-Poppins mt-0">Innovate Chicago
                                    </motion.h1>
                                    <motion.h4
                                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className={"text-red-500 text-3xl md:mt-3 md:text-5xl font-Poppins font-bold"}>
                                        Sponsorships
                                    </motion.h4>
                                </div>
                            </div>
                            <div className={"flex-1"}></div>
                            <div className={`flex w-full justify-center mb-10 animate-bounce transition-all ${isTransparent ? "opacity-100" : "opacity-0"}`}>
                                <ChevronDownIcon className={"text-zinc-500 w-10"} />
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