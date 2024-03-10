import React from "react";

import Github from "../assets/icons/github-default.svg";
import Instagram from "../assets/icons/instagram.svg";
import X from "../assets/icons/x-social.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Mail from "../assets/icons/mail.svg";
const Footer = () => {
  return (
    <footer>
      <div className="p-4 flex flex-col justify-center items-center">
        <a
          className="flex font-extrabold cursor-pointer  text-zinc-400 items-center gap-2"
          href=""
          rel="noreferrer"
          target="_blank"
        >
          View this repository{" "}
          <span className="hover:scale-110 transition">
            <img alt="" src={Github} />
          </span>
        </a>
        <div className="flex mt-4 justify-evenly">
          <a
            className="hover:scale-110 transition"
            href="https://www.instagram.com/marlon.developer/"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Instagram Logo" rel="noreferrer" src={Instagram} />
          </a>
          <a
            className="hover:scale-110 transition"
            href="https://twitter.com/MarlonWebDev"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="X logo" src={X} />
          </a>
          <a
            className="hover:scale-110 transition"
            href="https://www.linkedin.com/in/marlon-chaviano-563806287"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="Linkedin logo" src={Linkedin} />
          </a>
        </div>
        <div className="mt-2">
          <p className="font-bold flex items-center gap-x-2 text-balance text-xs text-zinc-400">
            Made with ♥️ by Marlon{" "}
            <a href="mailto:chavianomarlon@gmail.com" rel="noreferrer" target="_blank">
              <img
                alt="Mail svg"
                className="transition hover:scale-110 cursor-pointer"
                src={Mail}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
