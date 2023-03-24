import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NewApp from './NewApp';

const InputForm = () => {
    const [userData, setUserData] = useState({});
    const { handleSubmit, register } = useForm();
    const [photo, setPhoto] = useState('');
    const [sign, setSign] = useState('');

    const submit = data => {
        setUserData(data);

        if (data.photo.length) {
            console.log('inside phoot', data.photo);
            handleAddPhoto(data.photo[0]);
        }
        if (data.signature.length) {
            handleAddSign(data.signature[0]);
        }
    }

    // 9e3db39ebdaf0baa8dd92b361f54f928

    const handleAddPhoto = image => {
        console.log(image);

        // const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${'9e3db39ebdaf0baa8dd92b361f54f928'}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    setPhoto(imgData.data.url);
                }
            })
    }

    const handleAddSign = image => {
        console.log(image);

        // const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${'9e3db39ebdaf0baa8dd92b361f54f928'}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    setSign(imgData.data.url);
                }
            })
    }


    console.log(userData);

    return (
        <div className='xl:flex justify-center gap-10'>
            <div className=''>
                <form onSubmit={handleSubmit(submit)} className='px-5 max-w-2xl mx-auto' action="">
                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Name: </label>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("name")} />
                    </div>


                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Father's Name : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("fatherName")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Mother's Name : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("motherName")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Date of Birth : </label>
                        <input type="date" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("dateOfBirth")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Age : </label>
                        <input type="number" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("age")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Address : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("address")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Blood Group : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("bloodGroup")} />
                    </div>
                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Mobile : </label>
                        <input type="number" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("mobile")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">E-mail : </label>
                        <input type="email" placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("email")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Photo : </label>
                        <input type="file" accept='image/*' placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("photo")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='md:text-xl' htmlFor="">Signature : </label>
                        <input type="file" accept='image/*' placeholder="Type here" className="input input-bordered md:w-full max-w-xs w-2/3" {...register("signature")} />
                    </div>

                    <div className='pb-5'>
                        <input type="submit" className='btn btn-sm mr-3' />
                        <input type="reset" className='btn btn-sm btn-warning' />
                    </div>
                </form>
            </div>

            {
                Object.keys(userData).length ? <NewApp userData={userData} photo={photo} sign={sign}></NewApp> : null
            }
        </div>
    );
};

export default InputForm;