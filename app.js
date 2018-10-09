const express = require("express");
const app = express();

const productRoutes = require("./api/routes/products");
const questionsRoutes = require("./api/routes/questions");


app.use('/products',productRoutes);
app.use('/questions',questionsRoutes);

module.exports = app;