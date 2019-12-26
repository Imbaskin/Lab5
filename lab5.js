'use strict';

const express = require('express');
const app = express()
const PORT = process.env.PORT || 80

app.get('/',(req, res)=>{
  res.end('Hi, There!')
})
