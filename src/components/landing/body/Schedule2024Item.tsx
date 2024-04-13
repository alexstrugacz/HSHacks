import * as React from "react"
const Schedule2024Item: React.FC<{
    startTime: string;
    name: string;
    includeStartTime: boolean;
    height?: number;
    shrinkText?: boolean;
}> = (props) => {



    return (
        <div style={{
            height: props.height ? `${props.height * 6}rem` : undefined

        }} className={`flex gap-3`}>
            {props.includeStartTime && (
                <>
                    <p className={"font-Poppins pt-4 w-16 min-w-[4rem]"}>{props.startTime}</p>
                    <div className={"w-[1px] min-w-[1px] bg-zinc-300"}></div>
                </>
            )}
            <div className={`bg-zinc-200 rounded-xl p-3 mb-3 w-full hover:bg-zinc-300 md-hover:scale-105 transition-all`}>
                <p className={`font-Poppins font-bold ${props.shrinkText ? "text-[0.9rem]" : "text-lg"}`}>{props.name}</p>
            </div>
        </div>
    );
}
export default Schedule2024Item