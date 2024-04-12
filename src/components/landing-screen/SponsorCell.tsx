import * as React from "react"
const SponsorCell: React.FC<{
    tier?: string;
    src?: string,
    large?: boolean,
    small?: boolean,
    bgInvisible?: boolean
    compact?: boolean;
    hideTopText?: boolean;
    bigScreen?: boolean;

}> = (props) => {
    const tierBorderColor: { [key: string]: string } = {
        "diamond": "border-slate-200",
        "platinum": props.bigScreen ? "border-slate-400" : "border-slate-900",
        "gold": "border-yellow-700",
        "silver": props.bigScreen ? "border-zinc-500" : "border-zinc-500"
    }
    const tierTextColor: { [key: string]: string } = {
        "diamond": "text-slate-400",
        "platinum": props.bigScreen ? "text-slate-500" : "text-slate-800",
        "gold": "text-yellow-700",
        "silver": "text-zinc-500"
    }
    return (
        <div>
            {props.tier && !props.hideTopText && (
                <p className={`pb-1 ${tierTextColor[props.tier]} text-white font-Poppins font-bold w-fit rounded-sm text-sm`}>{props.tier.toUpperCase()}</p>
            )}
            {props.bigScreen ? (
                <div className={`${(props.tier === "silver" ? "border-[0.2rem]" : "border-4")} flex flex-col border-solid ${props.tier ? tierBorderColor[props.tier] : ""} justify-center items-start p-4 bg-zinc-200 rounded-md w-fit`}>
                    <img src={props.src} className={`h-8 object-contain max-w-max min-w-max`} />
                </div>
            ) : (
                <div className={`flex ${props.bgInvisible ? "" : "shadow-md"} border-2 flex-col border-solid ${props.tier ? tierBorderColor[props.tier] : ""} justify-center items-start ${props.large ? "p-4 bg-zinc-200 w-40" : "bg-zinc-200 w-24 p-6 "} rounded-md w-fit ${props.small ? "min-w-[100px]" : "min-w-[100px]"}`}>
                    <img src={props.src} className={`${props.compact ? "h-7" : "h-14"} object-contain max-w-max min-w-max`} />
                </div>
            )}
        </div>
    );
}
export default SponsorCell