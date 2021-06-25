import React from 'react';
import { useGlobalContext } from '../../context';
import { Transition } from '@headlessui/react';
import { HiOutlineX, HiAnnotation } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';
import DayJS from 'react-dayjs';

export default function List() {
    const { timeline, categories, removeTimeline } = useGlobalContext();

    return (
        <>
            {
                timeline.length === 0 ? <Transition appear={true} show={true} enter="transition-opacity duration-75" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"><div key="no-timeline" className="h-96 flex items-center justify-center"><p className="text-center text-white text-2xl"><HiAnnotation className="inline-flex mb-2 mr-2" />ไม่พบไทม์ไลน์</p></div></Transition> : " "
            }
            <section className="max-h-96 overflow-y-scroll pr-2">
                <div className="ml-2 border-l-4 border-brand">
                    {categories
                        .sort((a, b) => new Date(a) - new Date(b))
                        .map((eachCate) => {
                            return (
                                <Transition appear={true} show={true} enter="transition-opacity duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <div className="w-full relative" key={eachCate}>
                                        <FaCircle className="text-white shadow-sm absolute w-3 h-3 z-20 mt-3 -ml-2"/>
                                        <div className="ml-4 bg-white rounded-lg shadow-md px-4 py-3 mb-3">
                                            <DayJS format="DD MMM YYYY" element="h4" className="font-semibold title-font text-sm text-brand mb-1 tracking-wider">{eachCate}</DayJS>
                                            {
                                                timeline
                                                    .filter((time) => {
                                                        return (
                                                            time.cat === eachCate
                                                        )
                                                    })
                                                    .sort((a, b) => {
                                                        return new Date(a.datetime) - new Date(b.datetime)
                                                    })
                                                    .map((eachTime) => {
                                                        return (
                                                            <Transition appear={true} show={true} enter="transition-opacity duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                                <article key={eachTime.id} className="flex flex-row w-full justify-between items-start">
                                                                    <div className="flex gap-2">
                                                                        <DayJS element="p" format="HH:mm" className="leading-relaxed max-w-md">{new Date(eachTime.datetime)} </DayJS>
                                                                        <p className="leading-relaxed w-full">{eachTime.message}</p>
                                                                    </div>
                                                                    <HiOutlineX className="mt-1 font-bold text-brand-dark cursor-pointer pointer-events-auto" onClick={() => removeTimeline(eachTime.id)} />
                                                                </article>
                                                            </Transition>
                                                        )
                                                    })
                                            }
                                        </div>
                                    </div>
                                </Transition>
                            )
                        })}
                </div>
            </section>
        </>

    )
}
