import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const goToPreviousPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   };
const pageNumber = 2

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <div>
        <p>
          Página {pageNumber} de {numPages}
        </p>
        <button onClick={goToPreviousPage} disabled={pageNumber === 1}>
          Anterior
        </button>
        <button onClick={goToNextPage} disabled={pageNumber === numPages}>
          Siguiente
        </button>
      </div> */}
    </div>
  );
};

export default PDFViewer;