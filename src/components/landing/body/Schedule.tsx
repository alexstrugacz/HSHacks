import * as React from "react"
import ScheduleItem from "./ScheduleItem";
const Schedule: React.FC<{}> = (props) => {

    const SCHEDULE: { [key: string]: string }[] = [
        {
            startTime: "8:00AM",
            eventName: "Opening Ceremony",
            body: "In an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rema"
        },
        {
            startTime: "9:00AM",
            eventName: "Opening Ceremony",
            body: "In an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaIn an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaIn an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rema"
        },
        {
            startTime: "8:00AM",
            eventName: "Opening Ceremony",
            body: "In an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rema"
        }
    ]

    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Hackathon Schedule</h2>
                <br />
                {SCHEDULE.map(schedule => {
                    return (
                        <ScheduleItem
                            startTime={schedule.startTime}
                            eventName={schedule.eventName}
                            body={schedule.body}
                        />
                    )
                })}
                <br />
            </div>
        </div>
    );
}
export default Schedule