const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(404).json({ message: "Invalid Data!" });
    }
    next();
}

module.exports = validateUser;