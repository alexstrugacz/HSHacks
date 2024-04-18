import * as React from "react"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"

const HomepageButton: React.FC<{
    onClick: () => void
}> = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={`text-white font-Poppins text-lg md:text-xl font-bold py-3 px-5 pr-3 mt-3 rounded-full bg-gradient-to-tl  from-[#3A9DFF] to-[#4C99B0] hover:scale-105 transition-all`}>
                <div className={"flex items-center gap-5"}>
                    <p>View the Schedule!</p>
                    <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                </div>
            </button>
        </div>
    );
}
export default HomepageButton;