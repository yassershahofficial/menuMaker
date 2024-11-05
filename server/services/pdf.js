const createPDF = require('pdfkit');
const fs = require('fs');
var menu = require('../model/model');

exports.create = async(req,res) => {
    const records = await menu.find();

    if(records.length === 0){
        return res.status(404).send({message: "No records Found"});
    }

    console.log("PDF Creating...");
    console.log("There are " + records.length + " dishes in total");
    const doc = new createPDF;

    doc.pipe(fs.createWriteStream('test.pdf'));
    doc.pipe(res);
    
    doc.fontSize(30).text("MENU", {
        align: 'center',
        lineGap: 50,
        underline: true
    })

    doc.fontSize(16);
    for(var i=0; i<records.length; i++){
        doc.text(records[i].fName + " : RM" + records[i].fPrice, {
            align: 'center'
        })
        // doc.text(records[i].fPrice, {
        //     lineBreak: true,
        //     // width: 40,
        //     align: 'right'
        // })
        doc.moveDown();
    }

    // doc.fontSize(16);
    // doc.text("test123", {
    //     align: 'center'
    // })
    // doc.moveDown();
    // doc.text("test432", {
    //     align: 'center'
    // })
    // doc.moveDown();

    doc.end();
    
    return console.log("PDF Created");
}