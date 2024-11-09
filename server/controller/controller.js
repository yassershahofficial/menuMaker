var menu = require('../model/model');

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Menu cannot be empty!" });
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
    menu.find().sort({fType : -1})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Error occured while retrieving information"})
        })
}

exports.delete = (req,res) => {
    const id = req.params.id;
    menu.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message : `Cannot delete with id = ${id} , Maybe id is incorrect`})
            }else{
                res.send({message : "Menu was deleted successfully!"})
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || `Cannot delete menu id = ${id}`})
        })
}
