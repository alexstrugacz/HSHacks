import React from 'react'
import { useCountdown } from '../use-countdown';
import styles from "./Countdown.module.css"
import { START } from '../../constants/start';

interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDownTimer = () => {
    const countdownHook = useCountdown(START);

    console.log("countdownHook.countDown", countdownHook.countDown, countdownHook.days)

    if (countdownHook.countDown < 0 && countdownHook.hours < 12 && countdownHook.days === -1) {
        return <div className={`${styles.animatedBg} bg-zinc-600 w-fit px-2 rounded-lg flex items-center`}>
            <p className={`text-white font-bold font-Poppins text-xs`}>HSHACKS HAS STARTED</p>
            <img className={"h-6 mb-2 ml-1"} src={"https://emojis.slackmojis.com/emojis/images/1643514977/10031/60fps_parrot.gif?1643514977"}/>

        </div>
    } else if (countdownHook.countDown > 0) {
        return (
            <div className={`bg-zinc-600 w-fit p-2 rounded-lg`}>
                <p className={`text-white font-Poppins text-xs`}>{countdownHook.days} days, {countdownHook.hours} hours, {countdownHook.minutes} minutes, {countdownHook.seconds} seconds</p>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default CountDownTimer;