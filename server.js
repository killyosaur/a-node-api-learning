'use strict';
import express from 'express';

const app = express();
let port = process.env.PORT || 3000;

app.listen(port);

console.log('a RESTful API server started on: ' + port);