import React from "react"
import Header from "./landing/header/Header";
import Body from "./landing/body/Body";

const Landing: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default Landing;