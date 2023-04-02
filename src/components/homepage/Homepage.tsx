import * as React from "react"
import { AnimatedBg } from "../shared/AnimatedBg";
import HSHacksLogo from "../shared/HSHacksLogo";
import Activity from "./Activity";
const Homepage: React.FC<{}> = (props) => {
    return (
        <div className={"bg-zinc-500"}>
            <AnimatedBg className={"h-screen"}>
                <div className={"p-10"}>
                    <div className={"flex"}>
                        <div>
                            <a
                                href={"/"}
                                className={
                                    `flex items-center gap-2 font-Poppins transition-all mb-1 opacity-80`
                                }
                            >
                                <HSHacksLogo
                                    className={`h-6 transition-all`}
                                    white
                                />
                                <b className={"text-white text-xl font-normal"}>HSHacks</b>
                            </a>
                            <h1 className={"font-Poppins text-4xl font-bold"}>Hackathon Homepage</h1>
                        </div>
                    </div>
                    <br />
                    <div className={"grid grid-cols-3 gap-5"}>
                        <Activity 
                            title={"Project Requests"}
                            description={"From PH&T"}
                        />
                        <Activity 
                            title={"Live Schedule"}
                            description={"HSHacks Schedule"}
                        />
                        <Activity 
                            title={"HSHacks Discord"}
                            description={"For support & more!"}
                        />
                        <Activity 
                            title={"School Map"}
                            description={"Map of JHHS"}
                        />
                    </div>
                </div>
            </AnimatedBg>
        </div>
    );
}
export default Homepage