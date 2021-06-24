import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    // set Validation
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // set selected
    const selected = [
        { label: 'ชาย', value: 'male' },
        { label: 'หญิง', value: 'female' },
        { label: 'ไม่ระบุ', value: 'unknow' }
    ]
    // State management
    const [gender, setGender] = useState(selected[2])
    const [age, setAge] = useState('25');
    const [job, setJob] = useState('Full Stack Developer');

    // manage timeline data
    const [timeline, setTimeline] = useState([
        { id: "1624331052200", datetime: "2021-01-20T10:02", cat: "2021-01-20T00:00", message: "ออกไปซื้ออาหารที่ 7-11" },
        { id: "1624331052204", datetime: "2021-06-22T10:02", cat: "2021-06-22T00:00", message: "พักอยู่ในหอพัก แถวมหาวิทยาลัย" },
        { id: "1624331130195", datetime: "2021-06-22T12:00", cat: "2021-06-22T00:00", message: "พักอยู่ในหอพัก แถวมหาวิทยาลัย" },
        { id: "1624331130196", datetime: "2021-06-22T14:00", cat: "2021-06-22T00:00", message: "อ่านหนังสือ ที่ศูนย์การเรียนรู้" },
        { id: "1624331130192", datetime: "2021-06-22T11:00", cat: "2021-06-22T00:00", message: "อ่านหนังสือ ที่บ้าน" },
        { id: "1624331130188", datetime: "2021-04-22T14:00", cat: "2021-04-22T00:00", message: "อ่านหนังสือ ที่ศูนย์การเรียนรู้" },
        { id: "1624331130177", datetime: "2021-07-22T14:00", cat: "2021-07-22T00:00", message: "อ่านหนังสือ ที่ศูนย์การเรียนรู้" },
    ])

    const [categories, setCategories] = useState(["2021-01-20T00:00", "2021-06-22T00:00", "2021-04-22T00:00", "2021-07-22T00:00"])

    const removeTimeline = (id) => {
        const updateTimeline = timeline.filter((each) => each.id !== id)
        setTimeline(updateTimeline);
        const remainCategories = Array.from(new Set(updateTimeline.map((each) => each.cat)))
        setCategories(remainCategories);
    }

    const formHandler = (data) => {
        const dataTimeline = { id: new Date().getTime().toString(), datetime: data.datetime, cat: `${data.datetime.substring(0, 10)}T00:00`, message: data.message }
        const newCategories = `${data.datetime.substring(0, 10)}T00:00`;

        setCategories(Array.from(new Set([...categories, newCategories])))
        setTimeline([...timeline, dataTimeline]);
        reset({ datetime: '', message: '' });
    }

    const value = {
        job, 
        setJob, 
        age, 
        setAge, 
        gender, 
        setGender, 
        timeline, 
        categories, 
        removeTimeline, 
        selected, 
        register, 
        handleSubmit, 
        formHandler, 
        formState: { errors }
    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};