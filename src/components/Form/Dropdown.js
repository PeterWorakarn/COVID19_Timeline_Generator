import React from 'react';
import { Listbox } from '@headlessui/react';
import { HiSelector } from 'react-icons/hi';
import { useGlobalContext } from '../../context';

export default function Dropdown() {
    const { selected, setGender, gender} = useGlobalContext();

    return (
        <Listbox value={gender} onChange={setGender}>
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{gender.label}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true" /></span>
                </Listbox.Button>

                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {selected.map((each) => (
                        <Listbox.Option
                            key={each.value}
                            value={each}
                            className="cursor-default select-none relative py-2 pl-2 text-left" >
                            {each.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    )
}