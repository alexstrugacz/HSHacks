import * as React from "react"
import ScheduleItem from "./ScheduleItem";
const Schedule: React.FC<{}> = (props) => {

    const SCHEDULE: { [key: string]: string }[] = [

        {
            startTime: "7:50AM",
            eventName: "Check-in Starts",
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
            startTime: "9:00AM",
            eventName: "Personal Website Workshop",
            body: ""
        },
        {
            startTime: "10:00AM",
            eventName: "Postman Workshop",
            body: ""
        },
        {
            startTime: "12:00PM",
            eventName: "Lunch",
            body: ""
        },
        {
            startTime: "1:00PM",
            eventName: "Main Hacking Time",
            body: ""
        },
        {
            startTime: "2:00PM",
            eventName: "Jimmy McDermott (CTO of Transeo) AMA",
            body: ""
        },
        {
            startTime: "3:30PM",
            eventName: "Minigame",
            body: ""
        },
        {
            startTime: "5:45PM",
            eventName: "Presentations",
            body: ""
        },
        {
            startTime: "6:30PM",
            eventName: "Dinner + Judging",
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
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Hackathon
                    Schedule</h2>
                <p className={"font-Poppins text-xl mt-3"}>Coming soon!</p>
                <br/>
                {/*{SCHEDULE.map((schedule, index) => {*/}
                {/*    return (*/}
                {/*        <ScheduleItem*/}
                {/*            key={`schedule-${index}`}*/}
                {/*            startTime={schedule.startTime}*/}
                {/*            eventName={schedule.eventName}*/}
                {/*            body={schedule.body}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}
                <br/>
            </div>
        </div>
    );
}
export default Schedule