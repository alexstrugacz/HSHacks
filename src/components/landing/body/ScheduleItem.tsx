import * as React from "react"
const ScheduleItem: React.FC<{
    startTime: string;
    eventName: string;
    body: string;
}> = (props) => {
    return (
        <div className={"flex gap-3"}>
            <p className={"font-Poppins pt-4 w-16"}>{props.startTime}</p>
            <div className={"w-[5px] bg-zinc-200"}></div>
            <div className={"bg-zinc-200 rounded-xl p-4 mb-3"}>
                <p className={"font-Poppins font-bold text-xl"}>{props.eventName}</p>
                <p className={"font-Poppins mt-1"}>{props.body}</p>
            </div>

        </div>
    );
}
export default ScheduleItem