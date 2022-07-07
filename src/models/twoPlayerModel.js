const {Schema,model} = require('mongoose');



const TwoPlayers = new Schema({
 
    P1:
    {
    type: String,
    required: true
    },
    
    P2:
    {
    type: String,
    required: true
    },
    winner:
     {
        type: String,
        required: true
    },
    dificultad:
     {
        type: String,
        required: true
    },
    tematica:
    {
        type: String,
        required: true
    },
    turnos:
    {
        type: Number,
        required: true

    },
    gamemode:
    {
        type: String,
        required: true
    }



 

});

 const TwoPlayersModel = model("TwoPlayers", TwoPlayers);

module.exports = TwoPlayersModel;