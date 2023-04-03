import * as React from "react"
const Sponsor: React.FC<{
    tier: string;
    logo: string;
    body: string;
    url: string;
}> = (props) => {

    const tierBackgrounds: { [key: string]: string } = {
        "platinum": "bg-slate-900",
        "gold": "bg-yellow-700",
        "silver": "bg-zinc-500"
    }

    const handleClick = () => {
        // open url in new tab
        window.open(props.url, "_blank")


    }


    return (
        <div onClick={handleClick} className={"bg-zinc-200 rounded-lg p-2 hover:cursor-pointer hover:scale-105 transition-all hover:bg-zinc-300"}>
            <p className={`p-2 mb-2 ${tierBackgrounds[props.tier]} text-white font-Poppins font-bold w-fit rounded-lg text-sm`}>{props.tier.toUpperCase()}</p>
            <img src={props.logo} className={"h-15 max-h-12 my-8 mb-1 mt-3 object-contain"} />
            <p className={"p-1 font-Poppins"}>{props.body}</p>
        </div>
    );
}
export default Sponsor