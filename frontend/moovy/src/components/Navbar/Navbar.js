import React from "react";
import style from './style.module.css';
export default function Navbar(){
    return (
        <div className={style.panel} >
            <div className={style.logoHolder}>
            <svg
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 351.719 351.719"
                >
                <path d="M48.528,123.507l278.652-78.792L314.547,0L14.727,84.776l10.953,38.731h-0.258v38.266v8.196v181.75h311.57v-181.75
                    v-8.196v-38.266H48.528z M317.057,39.059l-27.952,7.908l20.044-35.885L317.057,39.059z M254.896,25.403L234.13,62.51
                    l-38.244,10.818l20.734-37.122L254.896,25.403z M161.662,51.75l-20.752,37.116l-42.544,12.027l20.752-37.121L161.662,51.75z
                    M64.146,79.314l-20.752,37.122l-10.374,2.933l-8.166-28.931L64.146,79.314z M272.85,131.703l-30.066,30.063h-39.781
                    l30.084-30.063H272.85z M175.971,131.703l-30.081,30.063h-44.192l30.069-30.063H175.971z M44.574,161.767h-10.95v-30.063h41.013
                    L44.574,161.767z M328.79,161.767h-28.896l28.896-28.883V161.767z"/>
                    
            </svg>
                Moovy
            </div>

            <div className={style.navoption}>
                Search
            </div>

            <div className={style.navoption}>
                My Library
            </div>
        </div>
    );
}