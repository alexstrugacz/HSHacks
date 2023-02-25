import * as React from "react"
const GoogleMaps: React.FC<{

}> = (props) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.17011491098!2d-87.96125054861294!3d42.103827359134186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbbad9a8cbbcd%3A0xbc3eb41efde43b5f!2sJohn%20Hersey%20High%20School!5e0!3m2!1sen!2sus!4v1677351095634!5m2!1sen!2sus"
            className={"w-full mt-5 rounded-lg h-80 mb-10 shadow-lg border-2 border-zinc-200"}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

        </iframe>
    );
}
export default GoogleMaps