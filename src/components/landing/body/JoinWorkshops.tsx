import { CommandLineIcon } from "@heroicons/react/24/solid";
import React from "react"
import joinworkshops from "../../../assets/images/workshops.png"


const JoinWorkshops: React.FC<{}> = () => {
    return (

        <div className={"w-full pt-5"}>
            <div className="flex flex-col md:flex-row items-center py-14 px-5 md:px-20 mx-auto max-w-6xl gap-10">
                <div className={"flex flex-1 flex-col items-center"}>
                    <img src={joinworkshops} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                    <p className={"mt-5 text-zinc-400 font-Poppins mr-3 text-sm md:text-lg"}>Workshop at the Assemble Hackathon</p>
                </div>
                <div className="flex-1 md:ml-4 mb-5">
                    <CommandLineIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins md:pt-0 font-bold text-2xl md:text-3xl">Join <a className="text-transparent bg-clip-text text-[#338EDA]">workshops</a></h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>Attend live, guided workshops to learn new skills in webdev, AI, and more! No experience needed.</p>
                </div>
            </div >
        </div>
    )
}

export default JoinWorkshops;