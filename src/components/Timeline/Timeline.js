import React from 'react';
// import { Dayjs } from 'dayjs';
import { useGlobalContext } from '../../context';
import { HiOutlineX } from 'react-icons/hi';
import Unknow0 from '../../asset/img/avatar/Unknown-0.svg';
import Male1 from '../../asset/img/avatar/Male-1.svg';
import Male3 from '../../asset/img/avatar/Male-3.svg';
import Male5 from '../../asset/img/avatar/Male-5.svg';
import Female1 from '../../asset/img/avatar/Female-1.svg';
import Female3 from '../../asset/img/avatar/Female-3.svg';
import Female5 from '../../asset/img/avatar/Female-5.svg';

export default function Timeline() {
    // const categories = ["2021-01-20T00:00","2021-06-22T00:00","2021-04-22T00:00","2021-07-22T00:00"]
    const { job, age, gender, timeline, categories, removeTimeline } = useGlobalContext();
    // const [avatarimg, setAvatarimg] = useState(true)

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
        <div className="w-2/3">
            <section>
                <h3>Profile</h3>
                <img width="150" height="150" src={avatar()} alt={`${avatar()}`} />
                <p>{age} ปี </p>
                <p>{job} </p>
            </section>
            <section>
                <h3>Timeline</h3>
                {timeline.length === 0 ? "No timeline found" : " "}
                { categories
                    .sort((a,b)=> new Date(a) - new Date(b))
                    .map((eachCate) => {
                    return (
                        <div key={eachCate}>
                            <h4>{eachCate}</h4>
                            {
                            timeline
                            .filter((time) => {
                                return (
                                    time.cat === eachCate
                                )
                            })
                            .sort((a,b) => {
                                return new Date(a.datetime) - new Date(b.datetime)
                            })
                            .map((eachTime) => {
                                return (
                                    <article key={eachTime.id}>
                                        <HiOutlineX onClick={()=> removeTimeline(eachTime.id)}/>
                                        <p>{eachTime.datetime} {eachTime.message}</p>
                                    </article>
                                )
                            })
                            }
                            <br />
                        </div>
                    )
                }) }

                {/* {timeline.sort((a,b) => {return new Date(a.datetime) - new Date(b.datetime)}).map((each) => {
                    return (
                        <article key={each.id}>
                            <HiOutlineX onClick={()=> removeTimeline(each.id)}/>
                            <p>{each.datetime}</p>
                            <p>{each.message}</p>
                            <br />
                        </article>
                    )
                })} */}
            </section>

        </div>

    )
}
