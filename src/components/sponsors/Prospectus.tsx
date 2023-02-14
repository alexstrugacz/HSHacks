import React from "react"
const sponsorPackages = require('../../assets/images/ICSponsorPackages.jpg')
const ProspectusPDF = require('../../assets/Innovate_Chicago_Sponsorsv2.pdf')
const ProofOfVenue = require('../../assets/ProofOfVenue.pdf')


const Prospectus: React.FC<{}> = () => {
    return (
        <div>
            <h1 className='text-neutral-700 font-Poppins font-bold text-4xl'>Sponsor Prospectus</h1>
            {/* <div className='mt-10 flex'>
                <a className='hover:ring-offset-1 hover:ring-4 transition-all text-black ring-orange-300 font-Poppins font-bold bg-orange-300 rounded md:px-8 px-2 text-center  py-2' href={ProspectusPDF} download="Prospectus">Download Prospectus</a>
                <a className='ml-3 hover:ring-offset-1 hover:ring-4 transition-all text-black ring-orange-300 font-Poppins font-bold bg-orange-300 rounded md:px-8 px-2 md:inline block py-2 text-center' href={ProofOfVenue} download="ProofOfVenue">Download Proof of Venue</a >
            </div> */}
            <h1 className='text-red-400 font-Poppins font-bold text-3xl mt-12'><a className=''>Empowering </a>Future Developers</h1>
            <div className='text-neutral-500 text-xl mt-3'>
                <p className=''>HSHacks is a 12-hour high school hackathon organized by the <a href='https://herseyhack.club' className='hover:font-bold transition-all underline'>JHHS Hack Club</a>. It will be held at <a href='https://www.google.com/maps/place/John+Hersey+High+School/@42.1038234,-87.9612505,17z/data=!3m1!4b1!4m5!3m4!1s0x880fbbad9a8cbbcd:0xbc3eb41efde43b5f!8m2!3d42.1038234!4d-87.9590565' className='hover:font-bold transition-all underline'>John Hersey High School</a> in Arlington Heights, IL. from 8AM to 8PM on April 15, 2023.</p>
                <br></br>
                <p>In a day full of collaboration and creativity, 50 attendees (projected) will bring their ideas to reality, learning skills far beyond just tech. With help from experienced professionals and mentors, students will learn invaluable skills by collaboratively building projects, joining engaging workshops, and more!</p>
            </div>
            <div>
                <h1 className='text-red-400 font-Poppins font-bold text-3xl mt-16'><a className=''>Where you </a>come in</h1>
                <p className='text-neutral-500 text-xl mt-3'>Your sponsorship is critical to HSHacks providing this life-changing experience. We’re seeking sponsorships to buy food, prizes, and other supplies to run the event.
                    <br /><br />By sponsoring HSHacks, you’ll directly contribute to inspiring, empowering, and enhancing the abilities of 50+ high school students.
                    <br /><br />All sponsorships are fully tax deductible under our fiscally sponsored 501(c) nonprofit status. </p>
            </div>
            <div>
                <h1 className='text-red-400 font-Poppins font-bold text-3xl mt-20'><a className=''>Benefits of </a>sponsorship</h1>
                <div className='flex mt-8 align-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
                    </svg>
                    <h2 className='ml-3 font-bold font-Poppins text-neutral-800 text-2xl'>
                        Raise Brand Awareness
                    </h2>
                </div>
                <p className='text-neutral-500 text-xl mt-3'>Some of the brightest, most passionate high school students in tech in the Chicago area will attend HSHacks. By mentoring students, providing challenges, and sponsoring swag, you'll create positive brand awareness in the minds of the next generation of developers.</p>
            </div>
            <div>
                <div className='flex mt-12 align-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                    </svg>
                    <h2 className='ml-3 font-bold font-Poppins text-neutral-800 text-2xl'>
                        Test new technologies
                    </h2>
                </div>
                <p className='text-neutral-500 text-xl mt-3'>Have you recently released a new technology or API? Hackathons are the perfect place to test new, cutting-edge technologies and their applications. Provide challenges and workshops around your new technologies at HSHacks!</p>
            </div>
            <div>
                <div className='flex mt-12 align-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                        <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
                    </svg>

                    <h2 className='ml-3 font-bold font-Poppins text-neutral-800 text-2xl'>
                        Inspiration
                    </h2>
                </div>
                <p className='text-neutral-500 text-xl mt-3'>Inventive minds and fresh eyes can help bring a new mindset to a challenge or problem. Let HSHacks participants take a crack at challenging problems in your field of operations or in the larger world.</p>
            </div>
            <div>
                <h1 className='text-red-400 font-Poppins font-bold text-3xl mt-20'><a className=''>Sponsor </a>packages</h1>
                <p className='mt-3 text-xl mb-12 text-neutral-600'>If you have any questions or would like to discuss adjustments for packages, please contact <a href='mailto:miguelaenlle@icloud.com' className='hover:underline font-bold text-black'>miguelaenlle@icloud.com</a>. All sponsorships are fully tax deductible under our fiscally sponsored 501(c) nonprofit status.</p>
                <img className="mt-10" src={sponsorPackages}></img>
                <div className='text-center mt-12 mb-24'>
                    <p className='font-Poppins text-lg'>Ready to inspire the next generation of developers?</p>
                    <p className='font-Poppins text-xl'>Contact <a href='mailto:alexstrugacz@icloud.com' className='font-bold'>alexstrugacz@icloud.com</a> or <a className='font-bold' href='mailto:miguelaenlle@icloud.com'>miguelaenlle@icloud.com</a> to discuss next steps!</p>
                </div>
            </div>
        </div>
    )
}

export default Prospectus;