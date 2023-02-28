import * as React from "react"
const ScheduleItem: React.FC<{
    startTime: string;
    eventName: string;
    body: string;
}> = (props) => {
    return (
        <div className={"flex gap-3"}>
            <p className={"font-Poppins pt-4 w-16 min-w-[4rem]"}>{props.startTime}</p>
            <div className={"w-[5px] min-w-[5px] bg-zinc-200"}></div>
            <div className={"bg-zinc-200 rounded-xl p-3 md:p-4 pl-3 mb-3 w-full md:w-fit"}>
                <p className={"font-Poppins font-medium text-lg md:text-xl"}>{props.eventName}</p>
                {props.body.length > 0 && (
                    <p className={"font-Poppins mt-1"}>{props.body}</p>
                )}
            </div>

        </div>
    );
}
export default ScheduleItem