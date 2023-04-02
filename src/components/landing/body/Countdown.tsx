import React from 'react'
import { useCountdown } from '../use-countdown';
import styles from "./Countdown.module.css"

interface ICountdown {
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDownTimer = () => {
    const countdownHook = useCountdown(new Date("2023-04-15T08:00:00-0500"));

    return (
        <div className={`bg-zinc-600 w-fit p-2 rounded-lg`}>
            <p className={`text-white font-Poppins text-xs`}>{countdownHook.days} days, {countdownHook.hours} hours, {countdownHook.minutes} minutes, {countdownHook.seconds} seconds</p>
        </div>
    );
}

export default CountDownTimer;