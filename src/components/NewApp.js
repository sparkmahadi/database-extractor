import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import './NewApp.css';
import PdfDocument from './PdfDocument';

function NewApp({ userData, photo, sign }) {

  //   const userData = {
  //     "name": "Md. Mahadi Hasan",
  //     "fatherName": "Nurul Amin",
  //     "motherName": "Nazma",
  //     "dateOfBirth": "2023-03-23",
  //     "age": "26",
  //     "address": "Chattogram, Bangladesh",
  //     "bloodGroup": "ab+",
  //     "mobile": "01252525666",
  //     "email": "sparkmahadi@gmail.com",
  //     "photo": {},
  //     "signature": {}
  // }

  const fileName = "Profile.pdf";


  // const photo = 'https://i.ibb.co/nw9jW8x/abcbacb.jpg';
  // const sign = 'https://i.ibb.co/dpwzXBD/assignment-11-marks.png'

  // console.log(photo, sign);

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


  return (
    <div className="App py-10 lg:pt-0 lg:pb-10">
      <div className='hidden lg:flex justify-center py-20 lg:pt-0 lg:pb-5'>
        <PDFViewer width={700} height={760} showToolbar={false}>
          <PdfDocument userData={userData} photo={photo} sign={sign} />
        </PDFViewer>
      </div>

      <div className='download-link btn btn-primary btn-sm normal-case'>
        <PDFDownloadLink
          document={<PdfDocument userData={userData} photo={photo} sign={sign} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Profile"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default NewApp;