import * as React from "react"
import { FAQ } from "../constants/faq";
import FaqItem from "./FaqItem";
const Faq: React.FC<{}> = (props) => {
    const col1data = FAQ.filter(data => data.col === 1);
    const col2data = FAQ.filter(data => data.col === 2);
    const COLS = [
        col1data,
        col2data
    ]

    return (
        <div className={"bg-zinc-200 py-20 border-t-2 border-t-zinc-300"}>
            <h3 className={"text-center text-3xl font-Poppins font-bold"}>Frequently Asked Questions</h3>
            <br />
            <div className={"md:max-w-6xl flex flex-col md:flex-row gap-1 md:gap-3 mx-auto px-5 md:px-20"}>
                {COLS.map(cols => {
                    return (
                        <div className={"flex flex-1 flex-col gap-1 md:gap-3 "}>
                            {
                                cols.map((data, index) => {
                                    if (data.isEmail) {
                                        return (
                                            <FaqItem
                                                question={data.question}
                                                answer={data.answer}
                                                email={data.isEmail}
                                            />
                                        )
                                    } else {
                                        return (
                                            <FaqItem
                                                question={data.question}
                                                answer={data.answer}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>

                    )
                })}

            </div>
        </div>
    );
}
export default Faq