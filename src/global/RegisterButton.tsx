import React from "react"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"

const RegisterButton: React.FC<{
}> = (props) => {

    const REGISTER_LINK = "https://forms.gle/ZLWzubEm8ziv1mm7A";

    return (
        <div>
            <a href={REGISTER_LINK} target="_blank">
                <button className="text-white text-xl font-bold py-3 px-5 pr-3 mt-12 rounded-full bg-gradient-to-b font-Poppins from-[#FB7B3C] to-[#CF424D] hover:scale-100 transition-all">
                    <div className={"flex items-center gap-5"}>
                        <p>Register Now</p>
                        <ChevronRightIcon className={"text-white w-5 h-5 stroke-1 stroke-white"} />
                    </div>
                </button>
            </a>
        </div>
    )
}

export default RegisterButton;