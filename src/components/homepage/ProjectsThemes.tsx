import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import * as React from "react"
import { AnimatedBg } from "../shared/AnimatedBg";
import { useNavigate } from "react-router-dom";
import CountdownLarge from "./CountdownLarge";
const ProjectsThemes: React.FC<{}> = (props) => {

    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate("/home");
    }

    return (
        <div className={"flex flex-col bg-zinc-800 h-screen"}>
            <div className={"h-[9rem]"}>
                <AnimatedBg className={"rounded-b-xl"}>
                    <div className={"p-5 md:p-10"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <a
                                    onClick={goToHomepage}
                                    className={
                                        `flex items-center gap-1 font-Poppins transition-all mb-1 opacity-80 hover:cursor-pointer hover:scale-105 w-fit hover:opacity-100`
                                    }
                                >
                                    <ChevronLeftIcon className={"h-5"} />
                                    <p className={"text-white text-xl"}>Back to homepage</p>
                                </a>
                                <h1 className={"font-Poppins text-3xl md:text-4xl font-bold mt-53md:mt-0"}>Project Requests & Themes</h1>
                            </div>
                        </div>
                    </div>
                </AnimatedBg>
            </div>
            <br />
            <div className={"flex-1 w-full h-full flex items-center justify-center"}>
                <div className={"flex flex-col items-center px-5"}>
                    <h3 className={"text-2xl text-center text-white font-Poppins font-bold mb-5"}>Project Requests & Themes will be announced in</h3>
                    <CountdownLarge />
                </div>
            </div>

        </div>
    );
}
export default ProjectsThemes