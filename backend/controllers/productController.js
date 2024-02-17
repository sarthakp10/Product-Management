const mongoose = require('mongoose');
const Product = require('../models/ProductSchema')

// GET all products
const getProds = async (req, res) => {
    const prods = await Product.find({}).sort({createdAt: -1});
    res.status(200).json(prods);
}

// GET a single product
const getsingleProd = async (req, res) => {
    const { id } = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No product found"});
    }
    const product = await Product.findById(id);

    if(!product) {
        return res.status(404).json({error: "No product found"});
    }
    res.status(200).json(product);
}

// POST a product in the database
const createProd = async (req,res) => {
    const { srno, id, name, description, img, cost } = req.body
    console.log(req.body);
    try {
        const prod = await Product.create({ srno, id, name, description, img, cost });
        res.status(200).json(prod);
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a product from a database
const deleteProd = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No product found"});
    }
    const product = await Product.findOneAndDelete({ _id: id});

    if(!product) {
        return res.status(404).json({error: "No product found"});
    }
    res.status(200).json(product);
}

// UPDATE a specific product
const updateProd = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No product found"});
    }
    const product = await Product.findOneAndUpdate({ _id: id}, {
        ...req.body
    });

    if(!product) {
        return res.status(404).json({error: "No product found"});
    }
    res.status(200).json(product);
}

module.exports = {getProds, getsingleProd, createProd, deleteProd, updateProd};