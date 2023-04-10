import * as React from "react"
import { AnimatedBg } from "../shared/AnimatedBg";
import HSHacksLogo from "../shared/HSHacksLogo";
import Activity from "./Activity";
import { motion } from "framer-motion";
import { CalendarDaysIcon, CalendarIcon, ChatBubbleLeftIcon, ChatBubbleLeftRightIcon, CommandLineIcon, GlobeAltIcon, MapIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { useParams, useSearchParams } from "react-router-dom";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Homepage: React.FC<{
    animated: boolean;
}> = (props) => {

    // no animation if query param 
    const [isZoomed, setIsZoomed] = React.useState(false)
    const [hidden, setHidden] = React.useState(true)

    const handleZoomChange = React.useCallback((shouldZoom: boolean) => {
        setIsZoomed(shouldZoom)
    }, [])

    React.useEffect(() => {
        if (isZoomed === false) {
            setHidden(true)
        }
    }, [isZoomed])

    return (
        <div className={"bg-zinc-800 -pb-30 overflow-hidden"}>
            <div className={"h-[9rem]"}>
                <motion.div
                    initial={{ opacity: 0, y: -300 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0, duration: props.animated ? 1 : 0 }}
                >
                    <AnimatedBg className={"rounded-b-xl"}>
                        <div className={"p-5 md:p-10"}>
                            <div className={"flex flex-col"}>
                                <div>
                                    <a
                                        href={"/"}
                                        className={
                                            `flex items-center gap-2 font-Poppins transition-all mb-1 opacity-80 hover:cursor-pointer hover:scale-110 w-fit hover:opacity-100`
                                        }
                                    >
                                        <HSHacksLogo
                                            className={`h-8 transition-all`}
                                            white
                                        />
                                        <b className={"text-white text-xl font-bold"}>HSHacks</b>
                                    </a>
                                    <h1 className={"font-Poppins text-2xl md:text-4xl font-bold mt-0 md:mt-0"}>Hackathon Homepage</h1>
                                </div>
                            </div>
                        </div>
                    </AnimatedBg>
                </motion.div>
            </div>
            <br />
            <div className={"min-h-screen"}>
                <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-5 md:p-10"}>
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: props.animated ? 0.2 + 0.5 : 0, duration: props.animated ? 0.5 : 0 }}
                    >
                        <Activity
                            icon={<CommandLineIcon className={"text-cyan-600 w-10 mr-2"} />}
                            title={"Projects & Themes"}
                            description={"Rubrics also included"}
                            intLink={"/pht"}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: props.animated ? 0.4 + 0.5 : 0, duration: props.animated ? 0.5 : 0 }}
                    >
                        <Activity
                            icon={<CalendarDaysIcon className={"text-cyan-600 w-10 mr-2"} />}
                            title={"Live Schedule"}
                            description={"HSHacks Schedule"}
                            intLink={"/live-schedule"}
                            bgImg={"https://i.ibb.co/8j9DhNX/items.png"}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: props.animated ? 0.6 + 0.5 : 0, duration: props.animated ? 0.5 : 0 }}
                    >
                        <Activity
                            icon={<ChatBubbleLeftRightIcon className={"text-cyan-800 w-10 mr-2"} />}
                            title={"HSHacks Discord"}
                            description={"For support & more!"}
                            extLink={"https://discord.gg/rja2sB9C3q"}
                            bgImg={"https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62a07b53139aec4c1fd07771_discord-logo.png"}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: props.animated ? 0.8 + 0.5 : 0, duration: props.animated ? 0.5 : 0 }}
                    >
                        <Activity
                            icon={<MapIcon className={"text-cyan-800 w-10 mr-2"} />}
                            title={"School Map"}
                            description={"Map of JHHS"}
                            bgImg={"https://i.ibb.co/BLpDYvX/src.png"}
                            intLink={"/school-map"}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: props.animated ? 1 + 0.5 : 0, duration: props.animated ? 0.5 : 0 }}
                    >
                        <Activity
                            icon={<WrenchScrewdriverIcon className={"text-cyan-800 w-10 mr-2"} />}
                            title={"Personal Website"}
                            description={"Resources for Live Workshop #1"}
                            bgImg={"https://i.ibb.co/BLpDYvX/src.png"}
                            intLink={"/workshops/personal_website_live"}
                        />
                    </motion.div>
                </div>
            </div>

            <div className={"h-[0px] overflow-hidden"}>
                <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                    <img className={`object-cover rounded-xl shadow-xl ${hidden ? "opacity-0" : "opacity-100"}`} src={"https://i.ibb.co/pPHJS5Q/Copy-of-jhhs-map.jpg"} />
                </ControlledZoom>
            </div>
        </div>
    );
}
export default Homepage