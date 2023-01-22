import { GiftIcon } from "@heroicons/react/24/solid";
import React from "react"
import getprizes from "../../../assets/images/prizes.png"


const GetPrizes: React.FC<{}> = () => {
    return (
        <div className={"w-full mt-5"}>
            <div className="flex flex-col md:flex-row items-center py-14 px-5 md:px-20 mx-auto max-w-6xl gap-10">
                <div className={"md:hidden flex-1 flex flex-col items-center"}>
                    <img src={getprizes} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                    <p className={"mt-5 text-zinc-400 font-Poppins mr-3 text-sm md:text-lg"}>Prizes TBD in March 2023</p>
                </div>
                <div className="flex-1 mb-5">
                    <GiftIcon className={"w-8 text-zinc-600 mb-1"} />
                    <h2 className="font-Poppins pt-4 md:pt-0 font-bold text-2xl md:text-3xl">Get <a className="text-transparent bg-clip-text text-orange-500">prizes & swag</a></h2>
                    <p className={"font-Poppins text-zinc-800 mt-3 text-lg"}>All participants will receive free Innovate Chicago Swag, and the top 3 projects will receive tech prizes!</p>
                </div>
                <div className={"hidden md:block flex-1 flex flex-col items-center"}>
                    <img src={getprizes} className={"object-cover w-full h-full rounded-xl shadow-lg scale-100 hover:scale-105 transition-all"} />
                    <p className={"mt-5 text-zinc-400 font-Poppins mr-3 text-center"}>Prizes TBD in March 2023</p>
                </div>
            </div >
        </div>
    )
}

export default GetPrizes;