var menu = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Content cannot be empty!" });
        return;
    }

    //new user
    const Menu = new menu({
        fName: req.body.fName,
        fType: req.body.fType,
        fPrice: req.body.fPrice
    });

    //save the user in the database
    Menu
        .save(Menu)
        .then(data =>{
            // res.send(data)
            res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error has occured while creating a create operation"})
        });
}

exports.find = (req,res)=>{
    menu.find()
            .then(data =>{
                res.send(data)
            })
            .catch(err =>{
                res.status(500).send({message: err.message || "Error occured while retrieving information"})
            })
}

exports.delete = (req,res) => {
    
}