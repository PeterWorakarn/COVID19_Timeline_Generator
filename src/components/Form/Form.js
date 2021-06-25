import React from 'react';
import Dropdown from './Dropdown';
import { useGlobalContext } from '../../context';
import { HiPlus, HiExclamation } from 'react-icons/hi';

export default function Form() {

    const { job, setJob, age, setAge, register, handleSubmit, formHandler, formState: { errors } } = useGlobalContext();

    return (
        <div className="z-10 bg-brand-white bg-opacity-80 backdrop-filter backdrop-blur-lg w-full md:w-2/5 px-4 py-5 space-y-6 sm:p-6 rounded-xl md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl md:rounded-br-none mb-5 md:mb-0">
            <section>
                <h2 className="main__heading">ข้อมูลผู้ป่วย</h2>
                <div class="h-1 w-28 bg-brand rounded mb-5"></div>
                
                <h3>ข้อมูลส่วนตัว</h3>
                <div className="flex gap-3">
                    <div className="relative mb-4 w-1/2">
                        <label htmlFor="gender" className="form__label">เพศ</label>
                        <div className="w-full">
                            <Dropdown />
                        </div>
                    </div>
                    <div className="relative mb-4 w-1/2">
                        <label htmlFor="age" className="form__label">อายุ</label>
                        <input value={age} onChange={(e) => { setAge(e.target.value) }} type="number" min="5" max="200" inputMode="decimal" id="age" name="age" className="form__field" />
                    </div>
                </div>
                <div className="relative mb-4 w-full">
                    <label htmlFor="job" className="form__label">อาชีพ</label>
                    <input value={job} onChange={(e) => { setJob(e.target.value) }} type="text" id="job" name="job" className="form__field" />
                </div>

            </section>
            <section>
                <form onSubmit={handleSubmit(formHandler)}>
                    <h3>ข้อมูลไทม์ไลน์</h3>
                    <div className="relative mb-4 w-full">
                        <div className="flex flex-row justify-between">
                            <label htmlFor="datetime" className="form__label">วันเวลา</label>
                            {errors.datetime && <HiExclamation className="w-5 h-5 text-brand-yellow" title="กรุณากรอกวันเวลา" />}
                        </div>
                        <input {...register("datetime", { required: true })} type="datetime-local" id="datetime" name="datetime" className="form__field" />
                    </div>
                    <div className="relative mb-4 w-full">
                        <div className="flex flex-row justify-between">
                            <label htmlFor="message" className="form__label">รายละเอียด</label>
                            {errors.message && <HiExclamation className="w-5 h-5 text-brand-yellow" title="กรุณากรอกรายละเอียด" />}
                        </div>
                        <textarea {...register("message", { required: true })}
                            id="message"
                            name="message"
                            className="form_textarea" />
                    </div>
                    <button className="form__btn" type="submit"><HiPlus className="w-6 h-6 mx-1" />เพิ่มข้อมูล</button>
                </form>

            </section>
        </div>
    )
}
