const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProdSchema = new Schema({
    srno: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', ProdSchema);
