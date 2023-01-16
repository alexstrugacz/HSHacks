import { FaceSmileIcon } from "@heroicons/react/24/solid";
import React from "react"
import havelotsoffun from "../../../assets/images/fun.png"


const HaveLotsOfFun: React.FC<{}> = () => {
    return (
        <div className={"w-full pt-5"}>
            <div className="flex flex-col md:flex-row items-center py-14 px-5 md:px-20 mx-auto max-w-6xl gap-10">
                <div className={"flex-1 flex flex-col items-center"}>
                    <img src={havelotsoffun} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                </div>
                <div className="flex-1 md:ml-4">
                    <FaceSmileIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins md:pt-0 font-bold text-2xl md:text-3xl">Have <a className="text-transparent bg-clip-text text-orange-500">lots of fun!</a></h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>We’ll hold mini-games and provide free food/drink throughout the hackathon!</p>
                </div>
            </div >
        </div>
    )
}

export default HaveLotsOfFun;