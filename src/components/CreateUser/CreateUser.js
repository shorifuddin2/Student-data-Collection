import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const CreateUser = () => {
    const [value, onChange] = useState(new Date());
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const url = `http://localhost:5000/users`;
        console.log(url)
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            alert('Student added successfully',result);
            event.target.reset()
        })
    }
    return (
        <div>
            <section class=" py-1 bg-blueGray-50">
                <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
            <h6 class="text-blueGray-700 text-xl font-bold">
                                    Create Data</h6>
                                <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                <DateTimePicker onChange={onChange} value={value} />
                                </button>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit( onSubmit)}>
                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Information
                                </h6>
                                <div class="flex">
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Name' {...register("name", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Job Post' {...register("job", {
                                            })} />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Phone Number' {...register("number", {
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="w-full lg:w-6/12 px-4">
                                        <div class="relative w-full mb-3">
                                            <input type="text" class="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Input Image Url' {...register("photo", {
                                            })} />
                                        </div>
                                    </div>
                                <div className="mt-5">
                                    <input class=" bg-red-500 text-white p-3 rounded-md btn w-full max-w-xs hover:bg-pink-600" type="submit" value="Create Data" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default CreateUser;