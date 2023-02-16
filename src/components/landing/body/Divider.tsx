import * as React from "react"
import styles from "./Divider.module.css"
const Divider: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-tl py-5 flex justify-center from-[#23a6d5] to-[#23d5ab]"}>
            <p className={"text-white font-Poppins font-bold text-lg md:text-2xl"}>What we'll do at HSHacks</p>
        </div>
    );
}
export default Divider