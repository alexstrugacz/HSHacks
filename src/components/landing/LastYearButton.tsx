import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import React from "react";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";

const LastYearButton: React.FC<{}> = () => {
    return (
        <a href={""}>
            <button
                className={`text-white font-Poppins text-lg md:text-xl font-bold py-3 px-5 pr-3 mt-5 rounded-full bg-gradient-to-tl  from-[#469FF6] to-[#19C58D] hover:scale-105 transition-all glow`}>
                <div className={"flex items-center gap-2"}>
                    <EyeIcon className={"text-white h-5"}/>
                    <p>Take a look at last year!</p>
                    <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                </div>
            </button>
        </a>
    )
}

export default LastYearButton;