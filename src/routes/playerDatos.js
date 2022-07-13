const express = require("express");
const router = express.Router();
const TwoPlayersMode = require("../models/twoPlayerModel");
const SingleMode = require("../models/singleModeModel");
const ImagenesUrl = require("../models/imagenesUrl");

router.post("/twoplayers", (req, res) => {
  const datos = req.body;
  let newRegistro = new TwoPlayersMode(datos);
  console.log(datos);
  newRegistro.save()
  .then(()=>{

    res.send("subido");
  })
  .catch(err => {
      res
        .status(204)
        .json("Error: " + "Peticion incorrecta");
    res.send(err);
  })
});

router.get("/twoplayers", async (req, res) => {
  const datos = await TwoPlayersMode.find()
    .then((data) => {
      res.json(data);
      
    })
  

  res.json(datos);
});

router.post("/singlemode", (req, res) => {
  const datos = req.body;
  let newRegistro = new SingleMode(datos);

  newRegistro.save()
 .then(()=>{

    res.send("subido");
  })
  .catch(err => {
      res
        .status(403)
        .json("Error: " + "Peticion incorrecta");
    res.send(err);
  })
});

router.post("/imagesUrl", (req, res) => {
  const datos = req.body; 
  let newImages = new ImagenesUrl(datos);

  newImages
    .save()
    .then((e) => console.log(e))

    
    .catch((err) => res.status(204).json("Error: " + 'Elemento actualmente cargado'));
});

router.post("/imagesUrlQuery", (req, res) => {
  const query = req.body.query;
  console.log(query);
  new Promise((resolve, reject) => {
    ImagenesUrl.find({ name: query })

      .then((data) => {
        res.json(data);
        resolve();
      })
      .catch((err) => {
        res
          .status(403)
          .json("Error: " + "no se encontro la query en la base de datos");
        reject();
      });
  });
});

router.get("/singlemode", async (req, res) => {
  const datos = await SingleMode.find()
    .then((data) => {
      res.json(data);
   
    })
   

 
});

module.exports = router;
