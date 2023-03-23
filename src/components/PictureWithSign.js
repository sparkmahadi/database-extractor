import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const PictureWithSign = ({photo, sign}) => {
    const styles = StyleSheet.create({
        fieldsContainer: {display:'flex', flexDirection:'row', alignItems:'flex-end', margin: '40px 30px', gap: '30px'},
        invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
        },
        label: {
            width: 100
        }
    });

    console.log('photo source', photo);

    return (
        <Fragment>
        <View style={styles.fieldsContainer}>
            <Image style={{width:'225px', height:'283px'}} src={photo} />
            <Image style={{width:'160px', height:'40px'}} src={sign} />
        </View >

    </Fragment>
    );
};

export default PictureWithSign;