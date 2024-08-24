import React from "react";

import {IIconProps} from "@/interfaces/icon-props.interface";

export function IconWhatsapp(props: IIconProps) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none">
        <g clipPath="url(#mageWhatsappFilled0)">
          <path
            d="m13.79 2.64l-.57-.08a9.13 9.13 0 0 0-8.92 4a9.1 9.1 0 0 0-.71 9.66a1.3 1.3 0 0 1 .1 1c-.41 1.41-.79 2.83-1.19 4.32l.5-.15c1.35-.36 2.7-.72 4.05-1.05a1.45 1.45 0 0 1 .85.08a9.45 9.45 0 1 0 5.89-17.78m2.52 13.12a2.76 2.76 0 0 1-2.72.56a9.19 9.19 0 0 1-5.13-3.71a8.51 8.51 0 0 1-1.11-2.08a2.49 2.49 0 0 1 .55-2.52a1.23 1.23 0 0 1 1.32-.42c.2.05.34.34.52.56c.146.413.317.817.51 1.21a.94.94 0 0 1-.2 1.31c-.45.4-.38.73-.06 1.18a6.71 6.71 0 0 0 2.82 2.32c.32.14.56.17.77-.16c.09-.13.21-.24.31-.36c.58-.73.4-.72 1.32-.32c.293.123.577.267.85.43c.27.16.68.33.74.57a1.45 1.45 0 0 1-.49 1.43"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="mageWhatsappFilled0">
            <path d="M2.5 2.5h19v19h-19z" fill="#fff" />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}
