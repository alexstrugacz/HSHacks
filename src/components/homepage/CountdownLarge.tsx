import React from 'react'
import { useCountdown } from '../landing/use-countdown';
import styles from "./Countdown.module.css"
import { START, START_PROJ } from "../constants/start";

interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownLarge = () => {
    const countdownHook = useCountdown(START_PROJ);
    return (
        <div className={`bg-zinc-600 w-fit p-2 rounded-lg`}>
            <p className={`text-white font-mono text-xl text-center`}>{countdownHook.days} days, {countdownHook.hours} hours, {countdownHook.minutes} minutes, {countdownHook.seconds} seconds</p>
        </div>
    );
}

export default CountdownLarge;