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
    slightlyLarger?: boolean;
    increasedPadding?: boolean;
    reducedPadding?: boolean;
}> = (props) => {
    const tierBorderColor: { [key: string]: string } = {
        "diamond": "border-slate-200",
        "platinum": props.bigScreen ? "border-slate-400" : "border-slate-800",
        "gold": "border-yellow-700",
        "silver": props.bigScreen ? "border-zinc-500" : "border-zinc-500"
    }
    const tierTextColor: { [key: string]: string } = {
        "diamond": "text-slate-400",
        "platinum": props.bigScreen ? "text-slate-500" : "text-slate-800",
        "gold": "text-yellow-700",
        "silver": "text-zinc-500"
    }

    const imageHeightBigScreen = React.useMemo(() => {
        if (props.reducedPadding) {
            if (!props.compact) {
                return "h-[4.5rem]"
            } else {
                return "h-[3rem]"
            }
        }
        if (props.increasedPadding) {
            return "h-[1.5rem]"
        }
        if (props.slightlyLarger) {
            return "h-[2.5rem]"
        }
        return 'h-8'

    }, [props.reducedPadding, props.slightlyLarger, props.increasedPadding])

    const imageHeightNotBigScreen = React.useMemo(() => {
        if (props.compact) {
            if (props.reducedPadding) {
                return "h-[5rem]"
            }
            if (props.increasedPadding) {
                return "h-[2.5rem]"
            }
            return "h-12"
        }
        if (props.increasedPadding) {
            return "h-10"
        }
        if (props.reducedPadding) {
            return "h-[5.5rem]"
        }
        return "h-14"

    }, [props.increasedPadding])

    const paddingBigScreen = React.useMemo(() => {
        if (props.increasedPadding) {
            return "p-5"
        }
        if (props.reducedPadding) {
            return "p-2"
        }
        return "p-4"
    }, [props.reducedPadding, props.increasedPadding])

    const paddingNotBigScreen = React.useMemo(() => {

        if (props.compact) {
            if (props.increasedPadding) {
                return "p-[1.75rem]"
            }
            if (props.reducedPadding) {
                return "p-2"
            }
        }

        if (props.increasedPadding) {
            return "p-8"
        }
        if (props.large) {
            return "p-4"
        }
        if (props.reducedPadding) {
            return "p-2"
        }
        return "p-6"
    }, [props.large, props.reducedPadding, props.increasedPadding])

    return (
        <div>
            {props.tier && !props.hideTopText && (
                <p className={`pb-1 ${tierTextColor[props.tier]}  font-Poppins font-bold w-fit rounded-sm text-sm`}>{props.tier.toUpperCase()}</p>
            )}
            {props.bigScreen ? (
                <div className={`${(props.tier === "silver" ? "border-[0.2rem]" : "border-4")} flex flex-col border-solid ${props.tier ? tierBorderColor[props.tier] : ""} justify-center items-start ${paddingBigScreen} bg-zinc-200 rounded-md w-fit`}>
                    <img src={props.src} className={`${imageHeightBigScreen} object-contain max-w-max min-w-max`} />
                </div>
            ) : (
                <div className={`flex ${props.bgInvisible ? "" : "shadow-md"} border-2 flex-col border-solid ${props.tier ? tierBorderColor[props.tier] : ""} justify-center items-start ${paddingNotBigScreen} ${props.large ? "bg-zinc-200 w-40" : "bg-zinc-200 w-24"} rounded-md w-fit ${props.small ? "min-w-[100px]" : "min-w-[100px]"}`}>
                    <img src={props.src} className={`${imageHeightNotBigScreen} object-contain max-w-max min-w-max`} />
                </div>
            )}
        </div>
    );
}
export default SponsorCell