import * as React from "react"
const TeamMember: React.FC<{
    name: string;
    description: string;
}> = (props) => {
    return (
        <div className={"flex flex-col"}>
            <div className={"bg-zinc-300 w-24 h-24 rounded-full"}></div>
            <h2 className={"font-Poppins font-bold text-xl mt-3"}>{props.name}</h2>
            <p className="font-Poppins text-sm">{props.description}</p>
        </div>
    );
}
export default TeamMember