import React from "react";
import { LinearGradient } from "react-text-gradients";

export default function Skills() {
  return (
    <div id="skills" className="my-10">
      <h1 className="font-semibold text-6xl border-b-2 border-purple-600 pb-2 text-center w-[140vh]">
        <LinearGradient gradient={["to bottom", "#17acff ,#ff68f0"]}>
          Skills
        </LinearGradient>
      </h1>
      <ul className="my-10">
        <li className="bg-[#ff68f0] px-3 pb-1 pt-4 w-fit rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            height="100"
            id="html"
          >
            <polygon
              fill="#E44D26"
              points="3.345 21.601 1.419 0 22.581 0 20.653 21.598 11.987 24 3.345 21.601"
            ></polygon>
            <polygon
              fill="#F16529"
              points="12 22.164 19.002 20.222 20.65 1.766 12 1.766"
            ></polygon>
            <path
              fill="#EBEBEB"
              d="M12,9.778H8.495L8.252,7.065H12v-2.65H5.357l0.063,0.711l0.651,7.3H12V9.778L12,9.778z M12,16.658l-0.012,0.003l-2.95-0.797l-0.189-2.113H6.19l0.371,4.16l5.427,1.507L12,19.414V16.658L12,16.658z"
            ></path>
            <path
              fill="#FFF"
              d="M11.991,9.778v2.649h3.263l-0.308,3.436l-2.955,0.797v2.756l5.431-1.505l0.04-0.448l0.623-6.974l0.064-0.712h-0.714H11.991L11.991,9.778z M11.991,4.415v2.65h6.399l0.053-0.596l0.121-1.343l0.063-0.711H11.991L11.991,4.415z"
            ></path>
            <polygon
              fill="#DEDEDE"
              points="12 23.996 11.987 24 12 24 12 23.996"
            ></polygon>
            <path
              fill="#C64321"
              d="M12,7.065L12,7.065H8.252l0.242,2.713h3.496H12V7.065L12,7.065z M12,0H1.419l1.926,21.601L11.987,24L12,23.996v-4.582v0l-0.012,0.004l-5.427-1.507l-0.371-4.16h2.659l0.189,2.113l2.95,0.797l0.003-0.001v0L12,16.658v-4.231H6.071l-0.651-7.3L5.357,4.415h6.634H12V0L12,0z"
            ></path>
            <path
              fill="#CDCDCD"
              d="M8.849,13.751H6.19l0.371,4.16l5.427,1.507L12,19.414v0l-0.009,0.002v-2.756l-0.003,0.001l-2.95-0.797L8.849,13.751L8.849,13.751z M11.991,4.415H5.357l0.063,0.711l0.651,7.3H12h-0.009V9.778H8.495L8.252,7.065H12h-0.009V4.415L11.991,4.415z"
            ></path>
            <path
              fill="#DEDEDE"
              d="M12,16.658l-0.009,0.002v0v2.756L12,19.414V16.658L12,16.658z M12,9.778h-0.009v2.649H12V9.778L12,9.778z M12,4.415h-0.009v2.65H12V4.415L12,4.415z"
            ></path>
          </svg>
          <p className="text-center font-semibold my-2">HTML5</p>
        </li>
      </ul>
    </div>
  );
}
