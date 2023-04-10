import { ArrowTopRightOnSquareIcon, LinkIcon } from "@heroicons/react/24/solid";
import * as React from "react"
const ProjectOption: React.FC<{
    number: number;
    projectRequestName: string;
    extLink: string;
}> = (props) => {

    const handleRedirect = () => {
        window.open(props.extLink, "_blank");
    }

    return (
        <div onClick={handleRedirect} className={"flex-1 bg-zinc-200 p-5 pt-3 rounded-lg hover:bg-zinc-400 hover:cursor-pointer hover:scale-105 transition-all"}>
            <p className={"font-mono p-0"}>00{props.number}</p>
            <div className={"flex items-center gap-2"}>
                <ArrowTopRightOnSquareIcon className={"h-8 font-bold mb-1"} />
                <p className={"font-Poppins text-xl font-bold"}>{props.projectRequestName}</p>
            </div>
        </div>
    );
}
export default ProjectOption