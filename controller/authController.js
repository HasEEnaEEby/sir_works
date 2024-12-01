const Customer = require("../model/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { full_name, email, contact_no, password } = req.body;

        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) return res.status(400).json({ message: "Email already exists" });

        const customer = new Customer({ full_name, email, contact_no, password });
        await customer.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        res.status(500).json(e);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const customer = await Customer.findOne({ email });
        if (!customer) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: customer._id }, "secret_key", { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = { register, login };
