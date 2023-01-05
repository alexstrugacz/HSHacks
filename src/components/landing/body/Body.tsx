import React from "react"
import BuildProjects from "./BuildProjects";
import Description from "./Description";
import GetPrizes from "./GetPrizes";
import JoinWorkshops from "./JoinWorkshops";
import HaveLotsOfFun from "./HaveLotsOfFun";
import MeetTheTeam from "./MeetTheTeam";


const Body: React.FC<{}> = () => {
    return (
        <div>
            <Description />
            <BuildProjects />
            <GetPrizes />
            <JoinWorkshops />
            <HaveLotsOfFun />
            <MeetTheTeam />
        </div>
    )
}

export default Body;