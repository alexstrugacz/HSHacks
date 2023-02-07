import * as React from "react"
const Divider: React.FC<{}> = (props) => {
    return (
        <div className={"bg-gradient-to-t py-5 flex justify-center from-[#FF6200] to-[#FDA766]"}>
            <p className={"text-white font-Poppins font-bold text-lg md:text-2xl"}>What we'll do at HSHacks</p>
        </div>
    );
}
export default Divider