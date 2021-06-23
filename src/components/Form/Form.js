import React from 'react';
import Dropdown from './Dropdown';
import { useGlobalContext } from '../../context';

export default function Form() {

    const { job, setJob, age, setAge, register, handleSubmit, formHandler, formState: { errors } } = useGlobalContext();

    return (
        <div className="w-1/3">
            <section>
                <h2>ข้อมูลผู้ป่วย</h2>
                <div className="flex">
                    <div className="relative mb-4 w-1/2">
                        <label htmlFor="gender" className="leading-7 text-sm text-gray-600">เพศ</label>
                        <div className="w-full">
                            <Dropdown />
                        </div>
                    </div>
                    <div className="relative mb-4 w-1/2">
                        <label htmlFor="age" className="leading-7 text-sm text-gray-600">อายุ</label>
                        <input value={age} onChange={(e) => { setAge(e.target.value) }} type="number" min="5" max="200" inputMode="decimal" id="age" name="age" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="relative mb-4 w-full">
                    <label htmlFor="job" className="leading-7 text-sm text-gray-600">อาชีพ</label>
                    <input value={job} onChange={(e) => { setJob(e.target.value) }} type="text" id="job" name="job" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

            </section>
            <section>
                <form onSubmit={handleSubmit(formHandler)}>
                    <h2>ข้อมูลไทม์ไลน์</h2>
                    <div className="relative mb-4 w-full">
                        <label htmlFor="datetime" className="leading-7 text-sm text-gray-600">วันเวลา</label>
                        {errors.datetime && <p>กรุณากรอกเวลา</p>}
                        <input {...register("datetime",{required: true})} type="datetime-local" id="datetime" name="datetime" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4 w-full">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">รายละเอียด</label>
                        {errors.message && <p>กรุณากรอกรายละเอียด</p>}
                        <textarea {...register("message",{required: true})} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type="submit">submit</button>
                </form>

            </section>
        </div>
    )
}
