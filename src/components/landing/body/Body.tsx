import React from "react";
import { SCHEDULE_2024, SCHEDULE_GROUPINGS_2024 } from "../../shared/schedule2024";
import BuildProjects from "./BuildProjects";
import Description from "./Description";
import Divider from "./Divider";
import GetPrizes from "./GetPrizes";
import HaveLotsOfFun from "./HaveLotsOfFun";
import HowProjectsWork from "./HowProjectsWork";
import JoinWorkshops from "./JoinWorkshops";
import MeetTheTeam from "./MeetTheTeam";
import Schedule2024Item from "./Schedule2024Item";
import ScheduleItem from "./ScheduleItem";
import Sponsors from "./Sponsors";


const Body: React.FC<{}> = () => {
    const scrollRef = React.useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }


    return (
        <div className="overflow-hidden bg-gradient-to-b from-white to-slate-100">
            <Divider />
            <Description />
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">What we'll do at HSHacks</h2>
            </div>
            <br />
            <div className={"flex flex-col gap-20"}>
                <BuildProjects
                    handleScroll={handleScroll}
                />
                <JoinWorkshops />
                <GetPrizes />
                <HaveLotsOfFun />
            </div>
            <div className={"block"}>
                <br />
                <br />
                <br />
            </div>

            <div ref={scrollRef}>
                <HowProjectsWork />
            </div>


            <div className={"pt-10 overflow-x-scroll"}>
                <div className="flex flex-col items-start p-5 md:px-20 mx-auto max-w-6xl">
                    <br />
                    <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650] w-full">Schedule</h2>
                    <br />
                    <div className="gap-3 hidden xl:flex">
                        {SCHEDULE_2024.map((scheduleCol, index) => (
                            <div key={`schedule-list-${index}`} className={index === 0 ? `flex flex-col flex-[1.5]` : "flex flex-col flex-1"}>
                                {scheduleCol.map((scheduleItem, scheduleIndex) => {
                                    if (scheduleItem.isEmpty) {
                                        return <div style={{
                                            display: "flex",
                                            height: `${scheduleItem.height * 6}rem`
                                        }}>
                                            <div className={`bg-zinc-100 rounded-xl p-3 mb-3 w-full flex-1`}>
                                            </div>
                                        </div>
                                    } else {
                                        return <Schedule2024Item
                                            key={`schedule-${scheduleIndex}`}
                                            startTime={scheduleItem.startTime}
                                            name={scheduleItem.eventName}
                                            includeStartTime={index === 0}
                                            height={scheduleItem.height}
                                            shrinkText={scheduleItem.compact}
                                        />
                                    }
                                })}
                            </div>
                        ))}
                    </div>
                    <div className="w-full xl:hidden">
                        {SCHEDULE_GROUPINGS_2024.map((group) => {
                            return (
                                <div className="w-full">
                                    <p className={"font-Poppins w-16 min-w-[4rem] text-lg mb-2"}>{group.time}</p>
                                    {group.items.map((item, itemIndex) => (
                                        <Schedule2024Item
                                            key={`schedule-${itemIndex}`}
                                            startTime={item.startTime}
                                            name={item.eventName}
                                            includeStartTime={false}
                                        />
                                    ))}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={"block"}>
                <br />
                <br />
                <br />
            </div>

            <div className={"block"}>
                <br />
                <br />
                <br />
            </div>

            <Sponsors />


            <MeetTheTeam />



        </div>
    )
}

export default Body;