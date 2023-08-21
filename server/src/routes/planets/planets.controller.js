const  { dataa } = require("../../models/planets.model");
function getAllplanets(req,res) {
    // console.log(dataa)
    return res.send(dataa)
}

module.exports = {
    getAllplanets
}