'use strict';

const express = require('express');

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.static('./'));

app.listen(PORT, ()=>{
  console.log(`Server up on PORT ${PORT}`);
});
