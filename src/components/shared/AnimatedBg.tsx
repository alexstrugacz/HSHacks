import SponsorDisplay from "../homepage/SponsorDisplay";
import styles from "./AnimatedBg.module.css";
import * as React from "react"

export const AnimatedBg: React.FC<React.PropsWithChildren<{ className: string }>> = (props) => {
    return (
        <div className={`${props.className} ${styles.animatedBg} flex justify-between flex-wrap`}>
            {props.children} 
            <SponsorDisplay /> 
        </div>
        
    );
}