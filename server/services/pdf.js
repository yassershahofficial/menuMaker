const createPDF = require('pdfkit');
const fs = require('fs');

exports.create = (req,res) => {
    console.log("PDF Created...");
    const doc = new createPDF;

    doc.pipe(fs.createWriteStream('test.pdf'));
    doc.pipe(res);

    doc.fontSize(16);
    doc.text("test123", {
        align: 'center'
    })
    doc.moveDown();
    doc.text("test432", {
        align: 'center'
    })
    doc.moveDown();

    doc.end();

    return
}