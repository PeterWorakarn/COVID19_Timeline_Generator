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
    const [job, setJob] = useState('');

    // manage timeline data
    const [timeline, setTimeline] = useState([])	


    const [categories, setCategories] = useState([])

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