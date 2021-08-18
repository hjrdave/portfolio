import React from "react";
import { compContainer } from './logo.module.scss';

interface Props {
  className?: string;
}
export default function Logo({ className }: Props) {
  return (
    <svg
      id="logo_iconOnly_svg__Layer_1"
      className={`${compContainer} ${className}`}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 195.27 201.97"
    >
      <defs>
        <style>{".logo_iconOnly_svg__cls-1{fill:#342038}"}</style>
      </defs>
      <path
        className="logo_iconOnly_svg__cls-1"
        d="M119.76 115.37l.32-19.75-30.65-.47 16.12-15.35-24-24.26-24.66 23.52 15.63 15.83-30.65-.47-.35 22.43-7.76-.12.36-22.43-32.8-.5L.8 126l24.3.37-.2 12.38-24.29-.36-.52 32.21 32.8.5.36-22.43 7.76.12-.36 22.43 29.3.45-11.38 10.83 20.64 20.91 21.29-20.26L89.47 172l29.38.45.24-15.06 18.62.29.67-42zm-9.66 9.45L96 124.6l.22-13.83 14.09.21z"
        transform="translate(-.09 -1.44)"
      />
      <path
        className="logo_iconOnly_svg__cls-1"
        d="M135.77 60.25h23.2v23.2h-23.2zM160.87 0h34.4v34.4h-34.4z"
      />
    </svg>
  )
}

