import * as React from "react"
import ScheduleItem from "./ScheduleItem";
const Schedule: React.FC<{}> = (props) => {

    const SCHEDULE: { [key: string]: string }[] = [

        {
            startTime: "8:00AM",
            eventName: "Opening Ceremony",
            body: ""
        },
        {
            startTime: "8:30AM",
            eventName: "Project Headspace & Timing Speaker",
            body: ""
        },
        {
            startTime: "8:45AM",
            eventName: "Theme Announcement",
            body: ""
        },
        {
            startTime: "8:45AM",
            eventName: "Coding Begins",
            body: ""
        },
        {
            startTime: "9:00AM",
            eventName: "Team Formation",
            body: ""
        },
        {
            startTime: "10:00AM",
            eventName: "Postman Workshop",
            body: ""
        },
        {
            startTime: "11:00AM",
            eventName: "Lunch",
            body: ""
        },
        {
            startTime: "12:00PM",
            eventName: "Weather API Workshop",
            body: ""
        },

        {
            startTime: "2:00PM",
            eventName: "Main Hacking Time",
            body: ""
        },
        {
            startTime: "3:00PM",
            eventName: "Sound Galaxy Workshop",
            body: ""
        },
        {
            startTime: "5:00PM",
            eventName: "Dinner",
            body: ""
        },
        {
            startTime: "6:00PM",
            eventName: "Finishing Touches on Projects",
            body: ""
        },
        {
            startTime: "7:00PM",
            eventName: "Final Submission Deadline",
            body: ""
        },
        {
            startTime: "7:45PM",
            eventName: "Award Ceremony",
            body: ""
        },
        {
            startTime: "8:00PM",
            eventName: "The End of an Awesome Day!",
            body: ""
        },
    ]

    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Hackathon Schedule</h2>
                <br />
                {SCHEDULE.map((schedule, index) => {
                    return (
                        <ScheduleItem
                            key={`schedule-${index}`}
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