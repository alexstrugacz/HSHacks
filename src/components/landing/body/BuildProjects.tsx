import { FireIcon } from "@heroicons/react/24/solid";
import React from "react"
import projects from "../../../assets/images/pht.png"

const BuildProjects: React.FC<{
    handleScroll: () => void;
}> = (props) => {
    return (
        <div className={"w-full pt-10"}>


            <div className="flex flex-col md:flex-row items-start py-5 pt-5 px-5 md:px-20 mx-auto max-w-6xl gap-10">
                <div className={`flex-1 w-full`}>
                    <img src={projects} className={"object-cover w-full h-72 mid:h-96 desktop:h-62 rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                    <p className={"mt-4 text-zinc-400 font-Poppins mr-3 text-sm w-full md:text-center"}></p>
                </div>
                <div className="flex-1 md:pt-7">
                    <FireIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins md:pt-0 font-bold text-2xl md:text-3xl">Build <a className="bg-clip-text text-[#338eda]">projects</a> for a nonprofit</h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>Go solo or join a group of 3-5 to build an awesome projects! You can build your own ideas or real-world solutions for nonprofit partner <a href={"https://www.projectheadspaceandtiming.org/"} target={"_blank"} className={"font-bold transition-all text-zinc-700 hover:text-zinc-400 hover:cursor-pointer"}>Project Headspace & Timing!</a>, a veterans' mental health advocacy!</p>
                    <br />
                    <p onClick={props.handleScroll} className={"font-bold text-lg font-Poppins transition-all text-[#338eda] hover:text-zinc-400 hover:cursor-pointer"}>{"Learn More >"}</p>
                </div>
            </div >
        </div>
    )
}

export default BuildProjects;