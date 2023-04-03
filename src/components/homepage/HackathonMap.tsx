import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import { AnimatedBg } from "../shared/AnimatedBg";
import { useNavigate } from "react-router-dom";
import {
    TransformWrapper, TransformComponent,
    ReactZoomPanPinchRef
} from "react-zoom-pan-pinch";


import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const HackathonMap: React.FC<{}> = (props) => {

    const transformComponentRef = React.useRef<ReactZoomPanPinchRef | null>(null);

    const zoomToImage = () => {
        if (transformComponentRef.current) {
            const { zoomToElement } = transformComponentRef.current;
            zoomToElement("imgExample");
        }
    };

    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate("/home");
    }

    return (
        <div className={"bg-zinc-800 min-h-screen"}>
            <div className={"h-[9rem]"}>
                <AnimatedBg className={"rounded-b-xl"}>
                    <div className={"p-5 md:p-10"}>
                        <div className={"flex flex-col"}>
                            <div>
                                <a
                                    onClick={goToHomepage}
                                    className={
                                        `flex items-center gap-1 font-Poppins transition-all mb-1 opacity-80 hover:cursor-pointer hover:scale-105 w-fit hover:opacity-100`
                                    }
                                >
                                    <ChevronLeftIcon className={"h-5"} />
                                    <p className={"text-white text-xl"}>Back to homepage</p>
                                </a>
                                <h1 className={"font-Poppins text-3xl md:text-4xl font-bold mt-53md:mt-0"}>JHHS Map</h1>
                            </div>
                        </div>
                    </div>
                </AnimatedBg>
            </div>
            <br />
            <div className={"mx-12"}>
                <p className={"font-Poppins font-bold text-white"}>HSHacks Venue</p>
                <a href={"https://goo.gl/maps/xNgbLi79DTrfoPZZ6"} target={"_blank"} className={"font-Poppins text-white underline hover:text-gray-400 transition-colors"}>John Hersey High School</a>
                <p className={"font-Poppins text-white"}>1900 East Thomas Street</p>
                <p className={"font-Poppins text-white"}>Arlington Heights, IL 60004</p>
            </div>
            <div className={"flex items-center justify-center mt-10 mx-5"}>
                <Zoom>
                    <img className={"object-cover rounded-xl shadow-xl"} src={"https://i.ibb.co/pPHJS5Q/Copy-of-jhhs-map.jpg"} />
                </Zoom>
            </div>
            <br />
            <br />
        </div>
    );
}
export default HackathonMap