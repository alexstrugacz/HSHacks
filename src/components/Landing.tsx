import React from "react"
import Header from "./landing/header/Header";
import Body from "./landing/body/Body";
import Footer from "./landing/footer/Footer";


const Landing: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Landing;