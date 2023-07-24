const fs = require('fs');
const pdfMake = require('pdfmake');

const htmlFilePath = '/home/mohana/react-tutorial/html dynamic/test.html';
const pdfFilePath = 'tttttttttt.pdf';

// Absolute path to the folder containing the TTF font files
const fontDir = '/home/mohana/react-tutorial/html dynamic/Roboto';

// Define font files
const fonts = {
  CustomFont: {
    normal: `${fontDir}/Your-Normal-Font.ttf`,
    bold: `${fontDir}/Your-Bold-Font.ttf`,
    italics: `${fontDir}/Your-Italic-Font.ttf`,
    bolditalics: `${fontDir}/Your-BoldItalic-Font.ttf`,
  },
};

fs.readFile(htmlFilePath, 'utf8', (err, htmlContent) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  // Create PDF content using pdfmake
  const pdfContent = {
    content: [
      { text: htmlContent, fontSize: 12, margin: [20, 20, 20, 20] }
    ],
    defaultStyle: {
      font: 'CustomFont', // Use the registered font
    },
    // Register the fonts correctly in the doc definition
    fonts: {
      CustomFont: {
        normal: 'CustomFont-Normal',
        bold: 'CustomFont-Bold',
        italics: 'CustomFont-Italic',
        bolditalics: 'CustomFont-BoldItalic',
      }
    },
  };

  // Create a PDF document
  const printer = new pdfMake(pdfContent.defaultStyle.fonts); // Pass the registered font

  const pdfDoc = printer.createPdfKitDocument(pdfContent);
  const writeStream = fs.createWriteStream(pdfFilePath);

  pdfDoc.pipe(writeStream);
  pdfDoc.end();

  console.log('PDF created successfully!');

  // Handle errors
  pdfDoc.on('error', (error) => {
    console.error('Error creating PDF:', error);
  });
});
