import * as React from "react"
const _66degrees = require("../assets/logos/66degrees.png")
const hackclub = require("../assets/logos/hackclub.png")
const stickermule = require("../assets/logos/stickermule.png")
const wolfram = require("../assets/logos/wolfram-1.png")

const Sponsors: React.FC<{}> = (props) => {
    return (
        <div className={"bg-zinc-100 py-20 border-t-2 border-t-zinc-300"}>
            <div className={"max-w-6xl mx-auto px-5 md:px-20"} >

                <h3 className={"text-left text-3xl font-Poppins font-bold"}>Proudly Presented by Our Sponsors</h3>
                <div className={"flex gap-3 mt-3 flex-wrap mt-5"}>
                    <a href={"https://66degrees.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-3 rounded-lg h-20 bg-zinc-200 hover:scale-110 hover:cursor-pointer transition-all"} src={_66degrees} />
                    </a>
                    <a href={"https://hackclub.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-3 rounded-lg h-20 bg-zinc-200 hover:scale-110 hover:cursor-pointer transition-all"} src={hackclub} />
                    </a>
                    <a href={"https://www.wolfram.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-3 rounded-lg h-20 bg-zinc-200 hover:scale-110 hover:cursor-pointer transition-all"} src={wolfram} />
                    </a>
                    <a href={"https://www.stickermule.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-3 rounded-lg h-20 bg-zinc-200 hover:scale-110 hover:cursor-pointer transition-all"} src={stickermule} />
                    </a>
                </div>
            </div >
        </div>
    );
}
export default Sponsors