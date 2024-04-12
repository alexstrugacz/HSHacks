import React from "react"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"
import styles from "./RegisterButton.module.css"

const RegisterButton: React.FC<{
    disabled?: boolean;
}> = (props) => {
    const REGISTER_LINK = "https://forms.gle/xxnx1HFVpszntRGf8";

    return (
        <div>
            <a target="_blank" href={REGISTER_LINK} className={props.disabled ? "pointer-events-none" : ""}>
                <button className={`text-white font-Poppins text-lg md:text-xl font-bold py-3 px-5 pr-3 mt-3 rounded-full bg-gradient-to-tl  from-[#3A9DFF] to-[#4C99B0] hover:scale-105 transition-all ${props.disabled ? "pointer-events-none opacity-50" : ""}`}>
                    <div className={"flex items-center gap-5"}>
                        <p>{props.disabled ? "Registration Closed" : "Register Now!"}</p>
                        <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                    </div>
                </button>
            </a>
        </div>
    )
}

export default RegisterButton;