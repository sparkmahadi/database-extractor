import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from './../App';

const Output = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [photoFiles, setPhotoFiles] = useState(null);
    const [images, setImages] = useState([]);



    useEffect(() => {
        if (userData.photo) {
            setPhotoFiles([userData.photo[0], userData.signature[0]])
        }
    }, [userData])

    useEffect(() => {
        const fileReaders = [];
        let isCancel = false;
        if (photoFiles) {
            const promises = photoFiles.map(file => {
                return new Promise((resolve, reject) => {
                    const fileReader = new FileReader();
                    fileReaders.push(fileReader);
                    fileReader.onload = (e) => {
                        const { result } = e.target;
                        if (result) {
                            resolve(result);
                        }
                    }
                    fileReader.onabort = () => {
                        reject(new Error("File reading aborted"));
                    }
                    fileReader.onerror = () => {
                        reject(new Error("Failed to read file"));
                    }
                    fileReader.readAsDataURL(file);
                })
            });
            Promise
                .all(promises)
                .then(images => {
                    if (!isCancel) {
                        setImages(images);
                    }
                })
                .catch(reason => {
                    console.log(reason);
                });
        };
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [photoFiles]);

    return (
        <div>
            <Link onClick={() => setUserData({})} to={'/'}><button className='btn btn-primary'>Home</button></Link>
            <Link to={'/download'}><button className='btn btn-primary'>Download</button></Link>
            <h3 className='text-center text-3xl bg-gray-200 font-semibold p-3 my-5 uppercase'>Profile</h3>
            <div className='lg:px-40 lg:mx-40 2xl:px-80 2xl:mx-52'>


                <div className=''>
                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Name </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.name}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Father's Name </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.fatherName}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Mother's Name </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.motherName}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Date of Birth </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.dateOfBirth}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Age </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.age}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Address </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.address}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Blood Group </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.bloodGroup}</p>
                    </div>
                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">Mobile </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.mobile}</p>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <label className='text-xl' htmlFor="">E-mail </label>
                        <p>:</p>
                        <p className='text-xl'>{userData.email}</p>
                    </div>

                    <div className='flex justify-center items-center gap-32 mt-10 pt-10'>
                        {
                            images.length > 0 ?
                                <img className='rounded-lg' style={{ "width": "450px", "height": "570px" }} src={images[0]} alt="" />
                                : null
                        }
                        {
                            images.length > 1 ?
                                <img style={{ "width": "300px", "height": "80px" }} src={images[1]} alt="" />
                                : null
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Output;