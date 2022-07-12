const {Schema,model} = require('mongoose');



const SingleMode = new Schema({

  dificultad: {
    type: String,
    required: true,
  },
  tematica: {
    type: String,
    required: true,
  },
  turnos: {
    type: Number,
    required: true,
  },
  gamemode: {
    type: String,
    required: true,
  },
});


 const SigleModeModel = model("SingleMode", SingleMode);

module.exports = SigleModeModel;