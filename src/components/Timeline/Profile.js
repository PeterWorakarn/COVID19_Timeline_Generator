import React from 'react';
import { useGlobalContext } from '../../context';
import Unknow0 from '../../asset/img/avatar/Unknown-0.svg';
import Male1 from '../../asset/img/avatar/Male-1.svg';
import Male3 from '../../asset/img/avatar/Male-3.svg';
import Male5 from '../../asset/img/avatar/Male-5.svg';
import Female1 from '../../asset/img/avatar/Female-1.svg';
import Female3 from '../../asset/img/avatar/Female-3.svg';
import Female5 from '../../asset/img/avatar/Female-5.svg';

export default function Profile() {
    const { job, age, gender } = useGlobalContext();

    const avatar = () => {
        if (gender.length === 0 || age.length === 0) {
            return Unknow0
        }

        if (gender.value === 'male') {
            if (age >= 50) { return Male5 }
            if (age >= 30) { return Male3 }
            if (age < 30) { return Male1 }
        }
        if (gender.value === 'female') {
            if (age >= 50) { return Female5 }
            if (age >= 30) { return Female3 }
            if (age < 30) { return Female1 }
        }

        return Unknow0
    }

    return (
        <section className="bg-brand-profile max-w-2xl pr-2 pl-1 py-2 mr-4 mb-4 rounded-full shadow-md flex flex-row items-center">
            <img className="shadow-md object-cover w-20 h-20 ml-1 my-0 mr-4 rounded-full " width="150" height="150" src={avatar()} alt={`${avatar()}`} />
            <div>
                <p className="text-gray-900 text-lg title-font font-medium mb-2">ผู้ป่วยเพศ{gender.label} {parseInt(age) < 5 || parseInt(age) > 200 ? "ไม่ทราบอายุ" : `อายุ ${age} ปี`} </p>
                <p className="leading-relaxed text-base">{job.length === 0 ? "ไม่ระบุอาชีพ" : `อาชีพ ${job}`} </p>
            </div>
        </section>
    )
}
