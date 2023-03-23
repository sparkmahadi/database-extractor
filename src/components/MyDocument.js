import React, { useContext, useEffect, useState } from 'react';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { UserDataContext } from './../App';

const MyDocument = () => {
    // const { userData, setUserData } = useContext(UserDataContext);
    const data = useContext(UserDataContext);
    console.log(data);
    let userData;
    const [photoFiles, setPhotoFiles] = useState(null);
    const [images, setImages] = useState([]);

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });



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
        <Document>
            <Page size="A4" >
                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Name </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.name}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Father's Name </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.fatherName}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Mother's Name </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.motherName}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Date of Birth </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.dateOfBirth}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Age </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.age}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Address </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.address}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Blood Group </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.bloodGroup}</p>
                    </View>
                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>Mobile </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.mobile}</p>
                    </View>

                    <View style={styles.section} className='grid grid-cols-3 items-center gap-5 mb-5'>
                        <Text>E-mail </Text>
                        <Text>:</Text>
                        <p className='text-xl'>{userData.email}</p>
                    </View>

                    <View style={styles.section} className='flex justify-center items-center gap-32 mt-10 pt-10'>
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
                    </View>
            
            </Page>
        </Document>
    );
};

export default MyDocument;