import React, { useEffect, useRef } from "react"
import Header from "./landing/header/Header";
import Body from "./landing/body/Body";
import Footer from "./landing/body/footer/Footer";
import NavbarWrapper from "./navbar/NavbarWrapper";
import Faq from "./faq/Faq";


const Landing: React.FC<{}> = () => {

    const scheduleScrollRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (scheduleScrollRef.current) {
            scheduleScrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleAutoScroll = () => {
        // if the url has ?scrollToSchedule=true, scroll to the schedule
        const url = new URL(window.location.href);
        const scrollToSchedule = url.searchParams.get("scrollToSchedule");

        if (scrollToSchedule === "true") {
            handleScroll();
        }
    }

    useEffect(() => {
        handleAutoScroll();
    }, [])


    return (
        <NavbarWrapper>
            <div>
                <Header
                    scrollToSchedule={handleScroll}
                />
                <Body
                    scheduleScrollRef={scheduleScrollRef}
                />
                <Faq />
                <Footer />
            </div>
        </NavbarWrapper>
    )
}

export default Landing;