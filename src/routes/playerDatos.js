const express = require('express');
const router= express.Router();
const TwoPlayersMode = require('../models/twoPlayerModel');
const SingleMode = require('../models/singleModeModel');

router.post('/twoplayers', (req, res) => {
   const datos = req.body
  let newRegistro = new TwoPlayersMode(datos);
  console.log(datos);
  newRegistro.save()
  res.send('subido')
   
   
  
})

router.get("/twoplayers", async (req, res) => {
  const datos = await TwoPlayersMode.find();

  res.json(datos);
});


router.post("/singlemode", (req, res) => {
  const datos = req.body;  
  let newRegistro = new SingleMode(datos);
  console.log(datos);
  newRegistro.save();
  res.send("subido");
});  


router.get("/singlemode", async (req, res) => {
  const datos = await SingleMode.find();  

  res.json(datos);
});  


module.exports=  router;
