import React from 'react'
import { useCountdown } from '../use-countdown';
import styles from "./Countdown.module.css"
import { START } from '../../constants/start';

const CountDownTimer = () => {
    const countdownHook = useCountdown(START);

    if (countdownHook.countDown < 0 && countdownHook.hours < 12 && countdownHook.days === -1) {
        return <div className={`${styles.animatedBg} bg-slate-700 w-fit px-2 rounded-lg flex items-center`}>
            <p className={`text-white font-bold font-Poppins text-xs`}>HSHACKS HAS STARTED</p>
            <img className={"h-6 mb-2 ml-1"} src={"https://emojis.slackmojis.com/emojis/images/1643514977/10031/60fps_parrot.gif?1643514977"}/>

        </div>
    } else if (countdownHook.countDown > 0) {
        return (
            <div className={`flex bg-[#252525] w-fit rounded-xl align-center gap-2 p-2 px-3 shadow-xl`}>
                <div className={"flex flex-col justify-center align-center items-center"}>
                    <p className={"text-[#C8DEFF] font-Poppins font-bold text-xl"}>{countdownHook.days}</p>
                    <p className={"text-[#A0B3CF] font-Poppins -mt-1 text-sm"}>days</p>
                </div>
                <div className={"flex items-center"}>
                    <p className={"text-[#A0B3CF] font-Poppins text-lg font-bold mx-1"}>&</p>
                </div>
                <div className={"flex flex-col justify-center align-center items-center"}>
                    <p className={"text-[#C8DEFF] font-Poppins font-bold text-xl"}>{countdownHook.hours}</p>
                    <p className={"text-[#A0B3CF] font-Poppins -mt-1 text-sm"}>hours</p>
                </div>
                <div className={"flex items-center ml-2"}>
                    <p className={"text-[#C8DEFF] font-Poppins text-lg"}>till HSHacks 2024!</p>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CountDownTimer;