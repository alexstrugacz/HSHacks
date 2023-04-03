import * as React from "react"
import { AnimatedBg } from "../shared/AnimatedBg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { SCHEDULE_ITEMS } from "./schedule-items";
import ScheduleItem from "./ScheduleItem";
import { IScheduleItem } from "./IScheduleItem";
import GradientScroll from 'react-gradient-scroll-indicator'
import { START_EARLY } from "../constants/start";
import moment from "moment";
import HSHacksLogo from "../shared/HSHacksLogo";
const Schedule: React.FC<{ display: boolean }> = (props) => {

    const navigate = useNavigate();

    const [activeItem, setActiveItem] = React.useState<IScheduleItem | undefined>(SCHEDULE_ITEMS[0]);
    const [currentItem, setCurrentItem] = React.useState<IScheduleItem>(SCHEDULE_ITEMS[0]);
    const [secondsTilNextItem, setSecondsTilNextItem] = React.useState<number>(0);

    const handleBack = () => {
        navigate("/home");
    }

    const handleClick = (item: IScheduleItem) => {
        const item1 = document.getElementById(`schedule-${item.i}`);
        if (item1) {
            item1.scrollIntoView({ behavior: "smooth", block: "center" });
        }


        setCurrentItem(item);
    }

    const findActiveItem = () => {
        const currentTime = moment();
        let newActiveItem: IScheduleItem | undefined = undefined;

        let cumMinutes = 0;
        let startTime = moment(START_EARLY);

        console.log("Current Time", currentTime.format("HH:mm"));

        for (let i = 0; i < SCHEDULE_ITEMS.length; i++) {
            const numMinutes = SCHEDULE_ITEMS[i].minutes;
            console.log("Start Time", startTime.format("HH:mm"), "num minutes", numMinutes);
            const diff = currentTime.diff(startTime, "minutes");
            if (diff >= 0 && diff <= numMinutes) {
                newActiveItem = SCHEDULE_ITEMS[i];
                console.log("====")
                break;
            }
            startTime = startTime.add(numMinutes, "minutes");

            // cumMinutes += numMinutes;

            // console.log(currentTime.format("HH:mm"))
            // console.log("diff", startTime.format("HH:mm"), diff, numMinutes);
        }
        setActiveItem(newActiveItem);
    }

    // repeat every second

    React.useEffect(() => {
        findActiveItem();
        const interval = setInterval(() => {
            findActiveItem();
        }, 10000);
        return () => clearInterval(interval);
    }, [])

    React.useEffect(() => {
        if (activeItem) {
            // scroll to the item index
            const item = document.getElementById(`schedule-${activeItem.i}`);
            if (item) {
                item.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            setCurrentItem(activeItem)
        }
    }, [activeItem])

    return (
        <div className={"flex flex-col bg-zinc-800 h-screen max-h-screen"}>
            <div className={"h-fit"}>
                <AnimatedBg className={"rounded-b-xl"}>
                    <div className={"p-5 md:p-10"}>
                        <div className={"flex flex-col"}>
                            <div>
                                {!props.display ? (
                                    <a
                                        onClick={handleBack}
                                        className={
                                            `flex items-center gap-1 font-Poppins transition-all mb-1 opacity-80 hover:cursor-pointer hover:scale-105 w-fit hover:opacity-100`
                                        }
                                    >
                                        <ChevronLeftIcon className={"h-5"} />
                                        <p className={"text-white text-xl"}>Back to homepage</p>
                                    </a>
                                ) : (

                                    <a
                                        href={"/"}
                                        className={
                                            `flex items-center gap-2 font-Poppins transition-all mb-1 opacity-80 hover:cursor-pointer hover:scale-110 w-fit hover:opacity-100`
                                        }
                                    >
                                        <HSHacksLogo
                                            className={`h-8 transition-all`}
                                            white
                                        />
                                        <b className={"text-white text-xl font-bold"}>HSHacks</b>
                                    </a>

                                )}
                                <h1 className={"font-Poppins text-3xl md:text-4xl font-bold mt-53md:mt-0"}>Live Schedule</h1>
                            </div>
                        </div>
                    </div>
                </AnimatedBg>
            </div>
            <div className={"flex-1 flex px-10 gap-5 overflow-y-hidden"}>
                <div className={"flex-1"}>
                    <GradientScroll
                        primaryColor={"#27272a"}
                        fadeHeight={"50px"}
                    >
                        <div className={"flex-1 flex flex-col gap-3 max-h-full h-full overflow-y-scroll py-10"}>
                            {
                                SCHEDULE_ITEMS.map((scheduleItem: IScheduleItem, i: number) => {
                                    return (
                                        <ScheduleItem
                                            id={`schedule-${i}`}
                                            key={`schedule-${i}`}
                                            item={scheduleItem}
                                            active={currentItem.i === scheduleItem.i}
                                            handleClick={() => {
                                                handleClick(scheduleItem);
                                            }}
                                        />
                                    )
                                })
                            }
                            <br />
                            <br />
                        </div>
                    </GradientScroll>
                </div>
                <div className={"mobile:hidden flex-[0.6] flex"}>
                    <div className={"flex flex-col  flex-1 bg-zinc-300 p-5 rounded-lg pb-20 h-fit mt-10"}>
                        <div className={"xl:flex xl:items-center gap-2 border-b-2 border-b-slate-400 pb-3"}>
                            {currentItem.emoji}
                            <div>
                                <h3 className={"text-2xl font-Poppins font-bold mt-1"}>{currentItem.title}</h3>
                                <p className={"font-Poppins text-zinc-500 text-lg"}>{currentItem.startTime} - {currentItem.endTime}</p>
                            </div>
                        </div>
                        <br />
                        <p className={"font-Poppins text-zinc-600 text-lg"}>
                            {currentItem.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Schedule