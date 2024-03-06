require('dotenv').config()
const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const mongoose = require('mongoose');

// Middleware
app.use(express.json({ limit: '60mb'}));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes:
app.use('/api/products',productRoutes);

// Connect to DB:
mongoose.connect(process.env.MONGO_CONNURL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to database. Listening to port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })




