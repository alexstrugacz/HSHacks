import React from "react";

const NavItem: React.FC<{
  link: string;
  text: string;
  transparent: boolean;
  redirect?: boolean;
}> = (props) => {
  return (
    <a
      href={props.link}
      target={props.redirect ? "_blank" : ""}
      className={
        `font-light ${props.transparent ? "text-white opacity-50 text-md" : "text-dark text-lg"} font-Poppins hover:cursor-pointer hover:text-zinc-400 transition-all`
      }
    >
      {props.text}
    </a>
  );
};

export default NavItem;
