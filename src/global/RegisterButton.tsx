import React from "react"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"
import styles from "./RegisterButton.module.css"

const RegisterButton: React.FC<{
}> = (props) => {
    // const REGISTER_LINK = "https://forms.gle/WSJr9xL5Hs4xbqfYA";

    return (
        <div>
            <a target="_blank">
                <button className={`text-white font-Poppins text-lg md:text-xl font-bold py-3 px-5 pr-3 mt-3 rounded-full bg-gradient-to-tl  from-[#23a6d5cc] to-[#23d5abcc] hover:scale-105 transition-all`}>
                    <div className={"flex items-center gap-5"}>
                        <p>Registration Coming Soon</p>
                        <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                    </div>
                </button>
            </a>
        </div>
    )
}

export default RegisterButton;