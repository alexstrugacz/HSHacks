import React, { useState } from "react";
import navimg from "./navimg.png";
import NavItem from "./NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const icIcon = require("../../assets/images/ic-icon.png")

const Navbar: React.FC<{
  transparent: boolean;
}> = (props) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  }

  const handleClose = () => {
    setOpened(false);
  }

  const REGISTER_LINK = "https://forms.gle/ZLWzubEm8ziv1mm7A";

  return (
    <div className={`fixed top-0 left-0 flex justify-between flex-col md:flex-row md:items-start md:items-center transition-colors z-20 p-5 ${(!props.transparent || opened) ? "bg-zinc-50 bg-opacity-90 shadow-lg" : "bg-neutral-900 bg-opacity-60 border-b-2 border-b-zinc-700 border-opacity-20"} w-full`}>
      <div className={"flex justify-between"}>
        <div className={`group flex items-start items-center gap-0 hover:cursor-pointer ${props.transparent ? "opacity-80" : "opacity-100"}`}>
          <img className={`w-9 group-hover:opacity-100 transition-all mt-1 ${props.transparent ? "w-8" : ""}`} alt="logo" src={icIcon}></img>
          <a
            href={"/"}
            className={
              `mr-12 ml-2 font-bold ${props.transparent ? "text-lg md:text-xl" : "text-xl md:text-2xl"} ${(props.transparent && !opened) ? "text-white" : "text-black"} font-Poppins hover:font-bold transition-all`
            }
          >
            Innovate Chicago
          </a>
        </div>
        <div className={"flex flex-col justify-center md:hidden mb-1"}>
          {
            opened ? (
              <XMarkIcon onClick={handleClose} className={`w-7 text-zinc-400 hover:${(props.transparent && !opened) ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
            ) : (
              <Bars3Icon onClick={handleOpen} className={`w-7 text-zinc-400 hover:${(props.transparent && !opened) ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
            )
          }
        </div>
      </div>

      <div className={`flex flex-col md:flex-row mt-5 md:mt-0 ${((opened)) ? "mobile:visible" : "mobile:hidden"} md:visible transition-all`}>
        <div className={"flex mr-8 md:mt-0 items-end"}>
          <NavItem link={"/"} text={"Overview"} transparent={(props.transparent && !opened)} />
        </div>
        <div className={"flex mr-8 items-end"}>
          <NavItem link={"/sponsors"} text={"For Sponsors"} transparent={(props.transparent && !opened)} />
        </div>
        <div className={"flex items-end"}>
          <NavItem link={REGISTER_LINK} text={"Register Now"} transparent={(props.transparent && !opened)} redirect/>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Navbar;
