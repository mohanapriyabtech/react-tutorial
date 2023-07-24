const fs = require('fs');
const path = require('path');
const fontDir = '/home/mohana/react-tutorial/html dynamic/Roboto';

const fonts = ['Roboto-Regular.ttf', 'Roboto-Bold.ttf', 'Roboto-Italic.ttf', 'Roboto-BoldItalic.ttf'];

const base64Fonts = {};

fonts.forEach((font) => {
  const fontPath = path.join(fontDir, font);
  const fontData = fs.readFileSync(fontPath).toString('base64');
  base64Fonts[font] = fontData;
});

console.log('Base64 encoded fonts:', base64Fonts);