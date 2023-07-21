const fs = require('fs');
const pdf = require('html-pdf');

function htmlToPDF(htmlContent, outputPath) {
  const options = {
    format: 'A4',
    childProcessOptions: {
      env: {
        OPENSSL_CONF: '/dev/null',
      },
    },
  };

  pdf.create(htmlContent, options).toFile(outputPath, (err, res) => {
    if (err) {
      console.error('Error generating PDF:', err);
    } else {
      console.log('PDF generated successfully!');
    }
  });
}

// Example usage
const htmlFilePath = '/home/mohana/react-learning/html dynamic/test.html';
const outputPath = 'a.pdf';

// Read the HTML content from the file
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

htmlToPDF(htmlContent, outputPath);