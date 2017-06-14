'use strict';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import routes from './api/routes/postRoutes';
routes(app);

app.listen(port);

console.log('a RESTful API server started on: ' + port);