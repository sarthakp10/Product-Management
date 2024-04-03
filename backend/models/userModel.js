const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    conpassword: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    }
})

userSchema.statics.signup = async function signup(name, email, password, conpassword, contact) {

    // Validation
    if(!email || !password) {
        throw Error('Please fill the required fields.')
    }

    if(!validator.isEmail(email)) {
        throw Error('Invalid Email entered')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    if(password !== conpassword) {
        throw Error('Passwords do not match.')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash, conpassword, contact })
    return user
} 

userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('Please fill the required fields.')
    }

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Incorrect Email entered')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect password entered')
    }
    return user
}

module.exports = mongoose.model('User', userSchema);


