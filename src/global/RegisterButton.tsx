import React from "react"

const RegisterButton: React.FC<{
    link: string
}> = (props) => {
    return (
        <div>
            <a href={props.link}>
                <button className="text-white text-xl font-bold py-3 px-5 mt-12 rounded-full bg-gradient-to-b from-[#FB7B3C] to-[#CF424D] hover:scale-110 transition-all">Register Now</button>
            </a>
        </div>
    )
}

export default RegisterButton;