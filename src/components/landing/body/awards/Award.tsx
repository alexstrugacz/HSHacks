import * as React from "react"
const Award: React.FC<{
    icon: React.ReactNode;
    name: string;
    prizes: string[];
    description: string;
}> = (props) => {
    return (
        <div className={"flex flex-col justify-start h-full mb-10"}>
            <div className={"flex items-center gap-2"}>
                {props.icon}
                <h3 className={"font-Poppins text-lg font-bold"}>{props.name}</h3>
            </div>
            <ul>
                {props.prizes.map(prize => {
                    return <li>
                        <p className={"font-Poppins text-zinc-600"}>- {prize}</p>
                    </li>
                })}
            </ul>
        </div>
    );
}
export default Award