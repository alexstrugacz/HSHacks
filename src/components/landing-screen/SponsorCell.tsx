import * as React from "react"
const SponsorCell: React.FC<{
    src?: string,
    large?: boolean,
    small?: boolean,
    bgInvisible?: boolean
}> = (props) => {
    return (
        <div className={`flex ${props.bgInvisible ? "" : "shadow-md"} justify-center items-center ${props.large ? "p-2 bg-zinc-200 w-40" : "bg-zinc-200 w-24 p-2 "} rounded-md w-fit ${props.small ? "min-w-[100px]" : "min-w-[100px]"} border-1 border-zinc-500`}>
            <img src={props.src} className={`${props.large ? "h-7" : ""} ${props.small ? "h-5" : "h-7"} object-contain`} />
        </div>
    );
}
export default SponsorCell