const validateUser = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(404).json({ message: "Invalid Data! all fields are required!" });
    }
    next();
}

module.exports = validateUser;