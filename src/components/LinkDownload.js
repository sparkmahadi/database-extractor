import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import MyDocument from './MyDocument';
import Output from './Output';

const LinkDownload = () => {
    return (
        <PDFDownloadLink document={<Output />} fileName="my_doc.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    );
};

export default LinkDownload;