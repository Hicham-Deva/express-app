const userRepo = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userRepo.getUserByEmail(email);
        if (!user) {
            const error = new Error('Invalid data!');
            error.satatusCode = 401;
            return next(error);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const error = new Error('Invalid data!');
            error.satatusCode = 401;
            return next(error);
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }

        );
        res.json({
            message: 'logged in',
            token: token,
            user: { id: user.id, name: user.name, email: user.email }
        })
    } catch (err) {
        next(err);
    }
}