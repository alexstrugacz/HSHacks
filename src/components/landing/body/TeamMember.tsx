import { UserIcon } from "@heroicons/react/24/solid";
import * as React from "react"
const TeamMember: React.FC<{
    name: string;
    description: string;
    imageUrl?: string;
}> = (props) => {
    return (
        <div className={"flex gap-3 items-center"}>
            {props.imageUrl ? (
                <img src={props.imageUrl} className={"h-24 w-24 rounded-full object-cover shadow-md border-2 border-white"} />
            ) : (
                <div className={"flex justify-center items-center bg-zinc-300 w-24 h-24 rounded-full shadow-md border-2 border-white"}>
                    <UserIcon className={"text-zinc-400 h-16 w-16"} />
                </div>
            )}
            <div className={"mb-3"}>
                <h2 className={"font-Poppins font-bold text-xl"}>{props.name}</h2>
                <p className="font-Poppins text-sm">{props.description}</p>
            </div>
        </div>
    );
}
export default TeamMember