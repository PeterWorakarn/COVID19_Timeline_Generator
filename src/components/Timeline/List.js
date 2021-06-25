import React from 'react';
import { useGlobalContext } from '../../context';
import { Transition } from '@headlessui/react';
import { HiOutlineX, HiAnnotation } from 'react-icons/hi';
import DayJS from 'react-dayjs';

export default function List() {
    const { timeline, categories, removeTimeline } = useGlobalContext();

    return (
        <section className="max-h-96 overflow-y-scroll pr-2">
            {
                timeline.length === 0 ? <Transition appear={true} show={true} enter="transition-opacity duration-75" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"><div key="no-timeline" className="h-96 flex items-center justify-center"><p className="text-center text-white text-2xl"><HiAnnotation className="inline-flex mb-2 mr-2" />ไม่พบไทม์ไลน์</p></div></Transition> : " "
            }
            {categories
                .sort((a, b) => new Date(a) - new Date(b))
                .map((eachCate) => {
                    return (
                        <Transition appear={true} show={true} enter="transition-opacity duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <div className="bg-white rounded-lg shadow-md px-4 py-3 mb-3" key={eachCate}>
                                <DayJS format="DD MMM YYYY" element="h4" className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{eachCate}</DayJS>
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
                        </Transition>
                    )
                })}
        </section>
    )
}
