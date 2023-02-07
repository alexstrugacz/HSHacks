import * as React from "react"
import FaqItem from "../faq/FaqItem";
import Prospectus from './Prospectus';


const SponsorContent: React.FC<{}> = (props) => {

    const SPONSOR_DATA = [
        {
            question: "What is HSHacks?",
            answer: "HSHacks is a hackathon for high school students in the Chicago area. It is a 12 hour hackathon that will take place on April 15th, 2023. The hackathon will be hosted in-person and will be free for all participants. We are looking for sponsors to help us make this event a success."
        },
        {
            question: "Where will my money go?",
            answer: "We will be using the money to pay for prizes, swag, and other expenses. We will also be using the money to help us host future events."
        },
        {
            question: "Why sponsor HSHacks?",
            answer: "Sponsoring HSHacks will allow you to reach a large audience of high school students in the Chicago area. You will also be able to help us make this event a success."
        },
        {
            question: "How can I help?",
            answer: "You can help by donating to our cause. You can also help by spreading the word about our event."
        }
    ]

    return (
        <div className={"px-5 md:px-20 md:max-w-6xl mx-auto my-10 md:my-24"}>
            <p className={"font-Poppins mt-3"}>
                <Prospectus />
            </p>
            <h3 className={"font-Poppins text-2xl font-bold md:mt-20 mt-10"}>FAQ</h3>
            <div className={"flex flex-col gap-2 mt-3"}>
                {SPONSOR_DATA.map(sponsor => {
                    return (
                        <FaqItem
                            question={sponsor.question}
                            answer={sponsor.answer}
                        />
                    )
                })}
            </div>
            <h3 className={"font-Poppins text-2xl font-bold mt-10 md:mt-20"}>Contact Us</h3>
            <p className={"font-Poppins mt-3"}>Email us about sponsorship inquiries at <a href="mailto:miguelaenlle@icloud.com" className={"underline text-slate-700"}>miguelaenlle@icloud.com</a>!</p>
            <br />
        </div>
    );
}
export default SponsorContent