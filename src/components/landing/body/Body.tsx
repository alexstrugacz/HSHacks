import React from "react";
import Faq from "../../faq/Faq";
import BuildProjects from "./BuildProjects";
import Description from "./Description";
import Divider from "./Divider";
import GetPrizes from "./GetPrizes";
import HaveLotsOfFun from "./HaveLotsOfFun";
import JoinWorkshops from "./JoinWorkshops";
import Sponsors from "./Sponsors";


const Body: React.FC<{}> = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-b from-white to-slate-100">
            <Description />
            <Divider />
            <BuildProjects />
            <JoinWorkshops />
            <GetPrizes />
            <HaveLotsOfFun />
            <Sponsors />
        </div>
    )
}

export default Body;