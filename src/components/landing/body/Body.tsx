import React from "react";
import Faq from "../../faq/Faq";
import BuildProjects from "./BuildProjects";
import Description from "./Description";
import Divider from "./Divider";
import GetPrizes from "./GetPrizes";
import HaveLotsOfFun from "./HaveLotsOfFun";
import HowProjectsWork from "./HowProjectsWork";
import JoinWorkshops from "./JoinWorkshops";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";
import AwardsList from "./awards/AwardsList";


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
            <div className={"flex flex-col gap-20"}>
                <BuildProjects
                    handleScroll={handleScroll}
                />
                <JoinWorkshops />
                <GetPrizes />
                <HaveLotsOfFun />
            </div>
            <div ref={scrollRef}>
                <HowProjectsWork />
            </div>
            <div className={"block md:hidden"}>
                <br />
                <br />
                <br />
            </div>
            <AwardsList />
            <div className={"block md:hidden"}>
                <br />
                <br />
                <br />
            </div>
            <Schedule />
            <div className={"block md:hidden"}>
                <br />
                <br />
                <br />
            </div>
            <Sponsors />
        </div>
    )
}

export default Body;