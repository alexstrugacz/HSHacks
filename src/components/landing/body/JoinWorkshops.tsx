import { CommandLineIcon } from "@heroicons/react/24/solid";
import React from "react"
import joinworkshops from "../../../assets/images/hshacks-2.jpg"


const JoinWorkshops: React.FC<{}> = () => {
    return (

        <div className={"w-full"}>
            <div className="flex flex-col md:flex-row items-start py-0 px-5 md:px-20 mx-auto max-w-6xl gap-10">
                <div className={"md:hidden flex-1 flex flex-col items-center w-full"}>
                    <img src={joinworkshops} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all h-80"} />
                    <p className={"mt-5 text-zinc-400 font-Poppins mr-3 text-sm text-left w-full pl-2"}>APIs Workshop at HSHacks 2023</p>
                </div>
                <div className="flex-1 mb-5 md:mt-7">
                    <CommandLineIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins md:pt-0 font-bold text-2xl md:text-3xl">Join <a className=" bg-clip-text text-[#338eda]">workshops</a></h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>Attend live, guided workshops to learn new skills in webdev, AI, and more! Fun for all skill levels, from no experience to master.</p>
                </div>
                <div className={"flex flex-1 flex-col items-center hidden md:block"}>
                    <img src={joinworkshops} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all md:h-64"} />
                    <p className={"mt-5 text-zinc-400 font-Poppins mr-3 text-sm text-center"}>APIs Workshop at HSHacks 2023</p>
                </div>
            </div >
        </div>
    )
}

export default JoinWorkshops;