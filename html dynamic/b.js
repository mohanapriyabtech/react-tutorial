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
const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';
const outputPath = 'output.pdf';

htmlToPDF(htmlContent, outputPath);