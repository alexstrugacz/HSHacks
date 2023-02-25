import * as React from "react"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"

const JoinTheDiscord: React.FC<{}> = (props) => {

    const JOIN_THE_DISCORD = "https://discord.gg/fmu8xdjTMV"

    return (
        <div>
            <a href={JOIN_THE_DISCORD} target="_blank">
                <button className={`text-white font-Poppins text-xl font-bold py-3 px-5 pr-3 mt-12 rounded-full bg-gradient-to-tl  from-[#CF424D] to-[#E96C2E] hover:scale-105 transition-all`}>
                    <div className={"flex items-center gap-5"}>
                        <p>Join the Discord</p>
                        <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                    </div>
                </button>
            </a>
        </div>
    );
}
export default JoinTheDiscord