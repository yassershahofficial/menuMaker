const axios = require('axios');

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/menus')
        .then(function(response){
            res.render('index', {menus: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}
