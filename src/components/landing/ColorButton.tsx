import React from "react";

const ColorButton: React.FC<{
    text: string;
    iconRight?: React.ReactNode;
    onClick: () => void;
}> = (props) => {
    return (
        <a onClick={props.onClick} >
            <button
                className={`text-white font-Poppins text-lg md:text-xl font-bold py-3 px-5 pr-3 mt-5 rounded-full bg-gradient-to-tl shadow-lg from-[#469FF6] to-[#19C58D] hover:scale-105 transition-all glow`}>
                <div className={"flex items-center gap-2"}>
                    <p>{props.text}</p>
                    {props.iconRight}
                </div>
            </button>
        </a>
    )
}

export default ColorButton;