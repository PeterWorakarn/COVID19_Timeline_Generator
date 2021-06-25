import React from 'react';

export default function Header() {
    return (
        <header className="bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl bg-white text-gray-600 body-font container px-5 py-5 md:mx-auto gap-5 flex items-center lg:flex-row flex-col mb-5">
            <img className="md:-ml-20 -mt-16 w-28 h-28 mb-2 " src="https://dummyimage.com/400" alt="virus" />
            <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <p className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">อยู่บ้าน หยุดเชื้อ เพื่อชาติ</p>
                <h1 className="header__heading">COVID-19 TIMELINE GENERATOR</h1>
            </div>
            {/* <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 "></div> */}
        </header>
    )
}
