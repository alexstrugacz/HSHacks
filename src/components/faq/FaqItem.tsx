import { ChevronRightIcon } from "@heroicons/react/24/solid"
import * as React from "react"
const FaqItem: React.FC<{
    question: string,
    answer: string,
    email?: boolean
}> = (props) => {

    const [showAnswer, setShowAnswer] = React.useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className={"shadow-md rounded-lg bg-zinc-200"}>
            <div onClick={handleShowAnswer} className={`flex gap-2 h-20 md:h-auto items-center bg-zinc-100 p-3 hover:bg-zinc-300 transition-colors hover:cursor-pointer rounded-lg`}>
                <ChevronRightIcon className={`w-4 h-4 min-w-[4px] stroke-1 stroke-black ${showAnswer ? "rotate-90" : ""} transition-all`} />
                <p className={"font-Poppins"}>{props.question}</p>
            </div>
            {showAnswer && (
                <div className={"p-3 pb-10 pt-5"}>
                    {props.email ? (
                        <p className={"font-Poppins text-zinc-600"}>Contact us at <a href="mailto:hshacks@programmer.net" className={"underline text-slate-700"}>hshacks@programmer.net</a> and we'd be happy to answer any questions!</p>
                    ) : (
                        <p className={"text-zinc-600 font-Poppins"}>{props.answer}</p>
                    )}
                </div>
            )}
        </div>
    );
}
export default FaqItem