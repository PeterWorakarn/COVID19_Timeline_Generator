import React from 'react';
import Virus from '../asset/img/Virus.svg'

export default function Header() {
    return (
        <header className="bg-brand-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl text-gray-600 body-font container px-5 py-5 md:mx-auto gap-5 flex items-center lg:flex-row flex-col mb-5">
            <img className="img-hero md:-ml-16 -mt-16 md:mr-0 w-28 h-28 md:w-44 md:h-44 mb-2" src={Virus} alt="virus" />
            <div className="shadow md:hidden"></div>
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <p className="text-xs text-brand tracking-widest font-medium title-font mb-1">React Hook</p>
                <h1 className="header__heading">COVID-19 TIMELINE GENERATOR</h1>
            </div>
            {/* <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 "></div> */}
        </header>
    )
}
