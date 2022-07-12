const { Schema, model } = require("mongoose");

const ImagenesUrl = new Schema({
  urls: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
    unique: true,
 
  },
});

const ImagnesUrlModel = model("ImagnesUrl", ImagenesUrl);

module.exports = ImagnesUrlModel;
