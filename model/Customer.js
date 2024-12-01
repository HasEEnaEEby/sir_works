const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contact_no: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Pre-save hook to hash the password
customerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;
