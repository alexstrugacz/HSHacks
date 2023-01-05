import React from "react"
import BuildProjects from "./BuildProjects";
import Description from "./Description";
import GetPrizes from "./GetPrizes";
import JoinWorkshops from "./JoinWorkshops";
import HaveLotsOfFun from "./HaveLotsOfFun";


const Body: React.FC<{}> = () => {
    return (
        <div>
            <Description />
            <BuildProjects />
            <GetPrizes />
            <JoinWorkshops />
            <HaveLotsOfFun />
        </div>
    )
}

export default Body;