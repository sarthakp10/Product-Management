const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProdSchema = new Schema({
    srno: {
        type: Number,
        required: false
    },
    id: {
        type: Number,
        required: false
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
        required: false
    },
    cost: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', ProdSchema);
