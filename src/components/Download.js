import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import React, { useEffect } from 'react';
import LinkDownload from './LinkDownload';
import MyDocument from './MyDocument';


const Download = () => {
    return (
        <>
        <PDFViewer>
            <MyDocument />
        </PDFViewer>

        <LinkDownload></LinkDownload>
        </>
    );
};

export default Download;