import * as React from "react"
const _66degrees = require("../assets/logos/66degrees.png")
const hackclub = require("../assets/logos/hackclub.png")
const stickermule = require("../assets/logos/stickermule.png")
const wolfram = require("../assets/logos/wolfram-1.png")

const Sponsors: React.FC<{}> = (props) => {
    return (
        <div className={"py-20 border-t-2 border-t-zinc-300"}>
            <div className={"max-w-6xl mx-auto px-5 md:px-20"} >

                <h3 className={"text-left text-3xl font-Poppins font-bold mb-5"}>Proudly Presented by Our Sponsors</h3>
                <div className={"flex gap-3 mt-3 flex-wrap mt-5"}>
                    <a href={"https://66degrees.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-5 rounded-lg h-20 pt-6 bg-zinc-100 hover:scale-110 hover:cursor-pointer transition-all stroke-2 stroke-black"} src={_66degrees} />
                    </a>
                    <a href={"https://hackclub.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-5 rounded-lg h-20 pt-6 bg-zinc-100 hover:scale-110 hover:cursor-pointer transition-all stroke-2 stroke-black"} src={hackclub} />
                    </a>
                    <a href={"https://www.wolfram.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-5 rounded-lg h-20 pt-6 bg-zinc-100 hover:scale-110 hover:cursor-pointer transition-all stroke-2 stroke-black"} src={wolfram} />
                    </a>
                    <a href={"https://www.stickermule.com/"} target="_blank" className={"h-30"}>
                        <img className={"object-contain shadow-md p-5 rounded-lg h-20 pt-6 bg-zinc-100 hover:scale-110 hover:cursor-pointer transition-all stroke-2 stroke-black"} src={stickermule} />
                    </a>
                </div>
            </div >
        </div>
    );
}
export default Sponsors