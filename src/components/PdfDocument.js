import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import DocTitle from "./DocTitle";
import ProfileInfo from './ProfileInfo';
import PictureWithSign from './PictureWithSign';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({userData, photo, sign }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <DocTitle title={'Profile'} />
                <ProfileInfo userData={userData}/>
                <PictureWithSign userData={userData}  photo={photo} sign={sign}/>
            </Page>
        </Document>
    );
}

export default PdfDocument;