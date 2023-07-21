const fs = require('fs');
const PDFDocument = require('pdfkit');

function htmlToPDF(htmlContent, outputPath) {
  // Create a new PDFDocument
  const doc = new PDFDocument();

  // Pipe the PDF content to a writable stream
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Parse and render the HTML content using 'pdfkit'
  const chunks = [];
  const options = { normalizeWhitespace: true, xmlMode: true };
  const htmlParser = require('htmlparser2');

  const parser = new htmlParser.Parser(
    {
      ontext: (text) => {
        chunks.push(text);
      },
    },
    options
  );

  parser.write(htmlContent);
  parser.end();

  const parsedHtml = chunks.join(' ');

  // Add the parsed HTML content to the PDF document
  doc.text(parsedHtml);

  // End the document and close the stream
  doc.end();

  console.log('PDF generated successfully!');
}

// Example usage
const htmlFilePath = '/home/mohana/react-learning/html dynamic/test.html';
const outputPath = 'c.pdf';



// Read the content of the HTML file
fs.readFile(htmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err);
  } else {
    // Call the htmlToPDF function with the HTML content and output path
    htmlToPDF(data, outputPath);
  }
});