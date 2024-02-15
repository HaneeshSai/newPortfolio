import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky backdrop-blur-2xl top-0 px-10 py-4 flex items-center justify-between border-b border-slate-700 rounded-md shadow">
      <ul className="flex gap-10 items-center text-md font-medium ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <ul className="flex gap-7 text-[20px] items-center ">
        <li>
          <button className="text-[15px] border border-purple-900 rounded-lg px-3 py-1.5 font-semibold bg-purple-600 hover:text-white transition-all ease-in-out hover:bg-shadow hover:bg-purple-700">
            Resume
          </button>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
