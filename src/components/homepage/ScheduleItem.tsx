import * as React from "react"
import { IScheduleItem } from "./IScheduleItem";
const ScheduleItem: React.FC<{
    id: string;
    item: IScheduleItem,
    active: boolean,
    handleClick: () => void
}> = (props) => {
    const heightRem = (props.item.minutes / 15) * 4.75
    return (
        <div id={props.id} onClick={props.handleClick} className={`flex items-center gap-4 justify-start ${props.active ? "bg-zinc-300" : "bg-zinc-500"} p-3 hover:${props.active ? "" : "bg-zinc-400"} transition-all hover:cursor-pointer rounded-lg shadow-xl font-Poppins ${props.active ? "py-6" : "py-4"}`}>
            {props.active ? props.item.emoji : props.item.inactiveEmoji}
            <div>
                <h3 className={`${props.active ? "text-xl lg:text-2xl font-bold -mb-1" : "text-md lg:text-xl font-semibold"} transition-all`}>{props.item.title}</h3>
                <p className={`text-md transition-all ${props.active ? "text-zinc-500 text-lg lg:text-xl" : "text-black text-sm lg:text-lg"}`}>{props.item.startTime} - {props.item.endTime}</p>
            </div>
        </div>
    );
}
export default ScheduleItem