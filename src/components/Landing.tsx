import React from "react"
import Header from "./landing/header/Header";
import Body from "./landing/body/Body";
import Footer from "./landing/footer/Footer";
import NavbarWrapper from "./navbar/NavbarWrapper";
import Faq from "./faq/Faq";


const Landing: React.FC<{}> = () => {
    return (
        <NavbarWrapper>
            <div>
                <Header />
                <Body />
                <Faq />
                <Footer />
            </div>
        </NavbarWrapper>
    )
}

export default Landing;