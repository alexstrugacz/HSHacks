import React from "react"
import chicago from "../../../assets/images/chicago.png"
import RegisterButton from "../../../global/RegisterButton";
import logolight from "../../../assets/logolight"


const Header: React.FC<{}> = () => {
    return (
        <div>
            <img alt="chicago skyline" className="w-full brightness-[0.3] h-screen object-cover" src={chicago}></img>
            <div>

                <a href="/" className="absolute p-2 top-0 md:ml-[10vh] md:mt-[5vh] mt-[2vh] text-black font-Poppins font-bold">{logolight}</a>
            </div>
            <p className="md:block hidden absolute top-0 font-bold right-0 mt-[10vh] mr-[15vh] p-2 text-[#B0C2DC] w-48 h-8">Organized by the <a href="https://herseyhack.club" className="text-orange-400 font-normal hover:underline hover:font-bold transition-all">Hersey Hack Club</a></p>
            <div className="absolute top-0 mt-[20vh] md:mt-[27vh] md:ml-[15vh] ml-[5vh] ">
                <h1 className="md:inline text-white font-bold text-5xl md:text-7xl">Innovate</h1>
                <h1 className="md:inline text-white font-bold text-5xl md:text-7xl">Chicago</h1>
                <p className="text-[#B0C2DC] font-bold text-xl font-Poppins pt-8">Learn to code and build <br className="md:hidden"></br> awesome projects at Innovate Chicago!</p>
                <div className="md:flex mt-8">
                    <div className="flex mr-16">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2603 22.351L12.3303 22.391L12.3583 22.407C12.4693 22.467 12.5935 22.4985 12.7198 22.4985C12.846 22.4985 12.9702 22.467 13.0813 22.407L13.1093 22.392L13.1803 22.351C13.5714 22.1191 13.953 21.8716 14.3243 21.609C15.2853 20.9305 16.1833 20.1667 17.0073 19.327C18.9513 17.337 20.9703 14.347 20.9703 10.5C20.9703 8.31196 20.1011 6.21354 18.5539 4.66637C17.0067 3.11919 14.9083 2.25 12.7203 2.25C10.5322 2.25 8.43382 3.11919 6.88664 4.66637C5.33947 6.21354 4.47028 8.31196 4.47028 10.5C4.47028 14.346 6.49028 17.337 8.43328 19.327C9.25692 20.1667 10.1545 20.9304 11.1153 21.609C11.4868 21.8716 11.8688 22.1191 12.2603 22.351ZM12.7203 13.5C13.5159 13.5 14.279 13.1839 14.8416 12.6213C15.4042 12.0587 15.7203 11.2956 15.7203 10.5C15.7203 9.70435 15.4042 8.94129 14.8416 8.37868C14.279 7.81607 13.5159 7.5 12.7203 7.5C11.9246 7.5 11.1616 7.81607 10.599 8.37868C10.0363 8.94129 9.72028 9.70435 9.72028 10.5C9.72028 11.2956 10.0363 12.0587 10.599 12.6213C11.1616 13.1839 11.9246 13.5 12.7203 13.5Z" fill="white" />
                        </svg>
                        <h2 className="font-bold text-white font-Poppins">Arlington Heights, IL</h2>
                    </div>
                    <div className="flex mt-2 md:mt-0">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M7.47028 3V5.25M17.9703 3V5.25M3.72028 18.75V7.5C3.72028 6.90326 3.95733 6.33097 4.37929 5.90901C4.80124 5.48705 5.37354 5.25 5.97028 5.25H19.4703C20.067 5.25 20.6393 5.48705 21.0613 5.90901C21.4832 6.33097 21.7203 6.90326 21.7203 7.5V18.75M3.72028 18.75C3.72028 19.3467 3.95733 19.919 4.37929 20.341C4.80124 20.7629 5.37354 21 5.97028 21H19.4703C20.067 21 20.6393 20.7629 21.0613 20.341C21.4832 19.919 21.7203 19.3467 21.7203 18.75M3.72028 18.75V11.25C3.72028 10.6533 3.95733 10.081 4.37929 9.65901C4.80124 9.23705 5.37354 9 5.97028 9H19.4703C20.067 9 20.6393 9.23705 21.0613 9.65901C21.4832 10.081 21.7203 10.6533 21.7203 11.25V18.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2 className="font-bold text-white font-Poppins">Spring 2023</h2>
                    </div>
                </div>
                <RegisterButton link={"/"} />
                <p className="w-4/5 md:max-w-none mt-8 font-bold font-Poppins text-neutral-400 underline"><a href="https://forms.gle/8enFaQkjySDTejfj8">Not sure if you can attend? Get a reminder closer to the event.</a></p>
            </div>
        </div >
    )
}

export default Header;