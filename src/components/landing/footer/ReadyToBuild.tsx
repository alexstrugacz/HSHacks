import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import RegisterButton from "../../../global/RegisterButton";
import Video from "../assets/code.mp4";

const ReadyToBuild: React.FC<{}> = () => {


    const openHerseyLink = () => {
        const url = "https://www.google.com/maps/place/John+Hersey+High+School/@42.0896973,-87.9250359,15z/data=!4m5!3m4!1s0x880fbbad9a8cbbcd:0xbc3eb41efde43b5f!8m2!3d42.1038234!4d-87.9590565";
        window.open(url, "_blank");
    }

    return (
        <div className={"relative w-full overflow-hidden h-[800px] bg-neutral-900"}>
            <video
                muted
                autoPlay
                playsInline
                loop
                className={"absolute min-w-full min-h-full max-h-none blur-sm max-w-none z-2 scale-105 opacity-10 md:opacity-10"}
            >
                <source
                    src={Video}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 flex items-center justify-between h-full w-full">
                <div className="mx-auto md:max-w-7xl px-5 md:px-20">
                    <h2 className="font-bold text-white font-Poppins md:text-6xl text-4xl leading-tight">Ready to Build?</h2>
                    <p className="mt-2 md:mt-8 md:text-xl text-lg font-Poppins text-[#B0C2DC]">Register for HSHacks today for a
                        truly unforgettable experience!</p>
                    <div className="mt-8">
                        <div onClick={openHerseyLink} className="group flex gap-2 mr-16 items-center hover:cursor-pointer w-fit">
                            <MapPinIcon className={"w-7 text-white group-hover:text-zinc-400 transition-colors"} />
                            <h2 className="font-bold text-white font-Poppins group-hover:text-zinc-400 transition-colors">John Hersey High School</h2>
                        </div>
                        <div className="flex mt-2 md:mt-3">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M7.47028 3V5.25M17.9703 3V5.25M3.72028 18.75V7.5C3.72028 6.90326 3.95733 6.33097 4.37929 5.90901C4.80124 5.48705 5.37354 5.25 5.97028 5.25H19.4703C20.067 5.25 20.6393 5.48705 21.0613 5.90901C21.4832 6.33097 21.7203 6.90326 21.7203 7.5V18.75M3.72028 18.75C3.72028 19.3467 3.95733 19.919 4.37929 20.341C4.80124 20.7629 5.37354 21 5.97028 21H19.4703C20.067 21 20.6393 20.7629 21.0613 20.341C21.4832 19.919 21.7203 19.3467 21.7203 18.75M3.72028 18.75V11.25C3.72028 10.6533 3.95733 10.081 4.37929 9.65901C4.80124 9.23705 5.37354 9 5.97028 9H19.4703C20.067 9 20.6393 9.23705 21.0613 9.65901C21.4832 10.081 21.7203 10.6533 21.7203 11.25V18.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h2 className="font-bold text-white font-Poppins ">April 2023</h2>
                        </div>
                    </div>
                    <RegisterButton />
                </div>
            </div>
        </div>

    )
}

export default ReadyToBuild;