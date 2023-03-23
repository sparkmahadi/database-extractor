import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    fieldsContainer: {display:'flex', flexDirection:'row', alignItems:'center', marginBottom:5, fontSize: "15px", gap: 10, marginLeft: '30px', marginRight: '30px'},
    label: {fontWeight: 'semibold'},
    values: {textAlign: 'left'}
});

const ProfileInfo = ({ invoice, userData }) => (
    <Fragment>
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Name:</Text>
            {/* <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text> */}
            <Text style={{}}>{userData.name}</Text>
        </View >

        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Father's Name: </Text>
            <Text style={styles.values}>{userData.fatherName}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Mother's Name: </Text>
            <Text style={styles.values}>{userData.motherName}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Date of Birth: </Text>
            <Text style={styles.values}>{userData.dateOfBirth}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Age: </Text>
            <Text style={styles.values}>{userData.age}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Address: </Text>
            <Text style={styles.values}>{userData.address}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Blood Group: </Text>
            <Text style={styles.values}>{userData.bloodGroup}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Mobile: </Text>
            <Text style={styles.values}>{userData.mobile}</Text>
        </View >
        <View style={styles.fieldsContainer}>
            <Text style={styles.label}>Email: </Text>
            <Text style={styles.values}>{userData.email}</Text>
        </View >
    </Fragment>
);

export default ProfileInfo;