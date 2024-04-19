import * as React from "react";
import { useNavigate } from "react-router-dom";
const Activity: React.FC<{
    icon?: React.ReactNode;
    title: string;
    description: string;
    bgImg?: string;
    intLink?: string;
    extLink?: string;
    onClick?: () => void;
    slightDark?: boolean;
}> = (props) => {
    const icon = props.icon;

    const navigate = useNavigate();

    const handleClicked = () => {
        if (props.extLink) {
            window.open(props.extLink, "_blank");
        } else if (props.intLink) {
            navigate(props.intLink);
        } else if (props.onClick) {
            props.onClick();
        }

    }

    return (
        <div onClick={handleClicked} className={"group bg-transparent shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all hover:cursor-pointer h-20"}>
            <div className={"relative rounded-lg h-full flex flex-col justify-start"}>
                {/* <div className={"relative h-40 bg-transparent z-0"}>
                    <img className={"w-full h-[107%] object-cover brightness-50 group-hover:brightness-75 transition-all"} src={props.bgImg} />
                </div> */}
                <div className={`relative p-4 bg-zinc-300 rounded-lg z-10 h-full`}>
                    <div className={"flex items-center gap-1 h-full"}>
                        {icon && icon}
                        <div className={"flex flex-col gap-0"}>
                            <h2 className={"text-black text-left font-Poppins font-bold text-md xl:text-lg"}>{props.title}</h2>
                            {/* <p className={"text-gray-500 text-left font-Poppins text-md"}>{props.description}</p> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Activity