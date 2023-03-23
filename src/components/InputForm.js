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

        handleAddPhoto(data.photo[0]);
        handleAddSign(data.signature[0]);
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
        .then(res=>res.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
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
        .then(res=>res.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                setSign(imgData.data.url);
            }
        })
    }


    console.log(userData);
    // useEffect(()=>{
    //     if(Object.keys(userData).length){
    //         navigate('/download');
    //     }
    // },[userData])

    return (
        <>
            <div className=''>
                <form onSubmit={handleSubmit(submit)} className='px-10 lg:mx-80 lg:px-20' action="">
                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Name: </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name")} />
                    </div>


                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Father's Name : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("fatherName")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Mother's Name : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("motherName")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Date of Birth : </label>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("dateOfBirth")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Age : </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("age")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Address : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("address")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Blood Group : </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("bloodGroup")} />
                    </div>
                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Mobile : </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("mobile")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">E-mail : </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Photo : </label>
                        <input type="file" accept='image/*' placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("photo")} />
                    </div>

                    <div className='flex justify-between items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Signature : </label>
                        <input type="file" accept='image/*' placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("signature")} />
                    </div>

                    <input type="submit" className='btn' />
                </form>
            </div>

            {
                Object.keys(userData).length ? <NewApp userData={userData} photo={photo} sign={sign}></NewApp> : null
            }
        </>
    );
};

export default InputForm;