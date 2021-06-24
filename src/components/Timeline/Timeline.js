import React from 'react';
// import { Dayjs } from 'dayjs';
import Profile from './Profile';
import List from './List';

export default function Timeline() {
    return (
        <div className="bg-opacity-40 backdrop-filter backdrop-blur-lg w-full md:w-3/5 px-4 py-5 bg-indigo-500 rounded-none md:rounded-tr-xl md:rounded-br-xl">
            <h2 className="main__heading text-white tracking-wider mb-5 font-semibold text-center ">Timeline</h2>
            <Profile />
            <List />
        </div>

    )
}
