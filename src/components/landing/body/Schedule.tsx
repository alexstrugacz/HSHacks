import * as React from "react"
// import ScheduleItem from "./ScheduleItem";
const Schedule: React.FC<{}> = (props) => {
    return (
        <div>
            <div className={"max-w-6xl w-full mx-auto px-5 md:px-20"}>
                <h2 className="font-bold font-Poppins text-2xl pb-3 border-b-2 border-b-[#3f6fa650]">Hackathon
                    Schedule</h2>
                <p className={"font-Poppins mt-3"}>Coming soon!</p>
                <br />
                {/* {SCHEDULE.map((schedule, index) => {
                   return (
                       <ScheduleItem
                           key={`schedule-${index}`}
                           startTime={schedule.startTime}
                           eventName={schedule.eventName}
                           body={schedule.body}
                       />
                   )
                })} */}
                <br />
            </div>
        </div>
    );
}
export default Schedule