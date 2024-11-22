import React from "react";
import style from "./style.module.css";

export default function SearchPanel({ setString, SearchCall }) {
  function handleInputChange(event) {
    setString(event.target.value);
  }

  return (
    <div className={style.panel}>
      <div className={style.label}>Search</div>

      <div className={style.searchBar}>
        <input
          className={style.input}
          type="text"
          placeholder="Type to search..."
          onChange={handleInputChange} 
        />

        <button className={style.searchButton} onClick={SearchCall}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <title>Search</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-256.000000, -1139.000000)"
                fill="currentColor"
              >
                <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
