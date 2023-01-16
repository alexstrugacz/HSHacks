import { FireIcon } from "@heroicons/react/24/solid";
import React from "react"
import projects from "../../../assets/images/projects.png"

const BuildProjects: React.FC<{}> = () => {
    return (
        <div className={"w-full pt-10"}>
            <div className="flex flex-col md:flex-row items-center py-14 px-5 md:px-20 mx-auto max-w-6xl gap-10">

                <div className={`flex-1 block md:hidden`}>
                    <img src={projects} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                </div>
                <div className="flex-1">
                    <FireIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins md:pt-0 font-bold text-2xl md:text-3xl">Build <a className="text-transparent bg-clip-text text-orange-500">projects</a></h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>Go solo or join a group of 3-5 to build an awesome project around the hackathon theme! </p>
                </div>
                <div className={`flex-1 hidden md:block`}>
                    <img src={projects} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                </div>
            </div >
        </div>
    )
}

export default BuildProjects;