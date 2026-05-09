const pool = require('../db');
const userRepo = require('../repositories/userRepository');

exports.getUsers = async(req, res, next) => {
    try {
        const users = await userRepo.getAllUsers();
        res.json(users);
    } catch (err) {
        next(err)
    }
}
exports.createUser = async(req, res, next) => {
    try {
        const { name, email } = req.body;
        const createdUser = await userRepo.createUser(name, email);
        res.status(201).json({ message: 'a new user has been added!', user: createdUser });

    } catch (err) {
        next(err);
    }

}

exports.updateUser = async(req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const updatedUser = await userRepo.updateUser(id, name, email);
        if (!updatedUser) {
            const error = new Error('User Not Found!');
            error.statusCode = 404;
            return next(error);
        }
        res.json({
            message: 'User updated successfully',
            user: updatedUser
        });


    } catch (err) {
        next(err);

    }

}


// 4. deleteUser (DELETE)
exports.deleteUser = async(req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const deletedUser = await userRepo.deleteUser(id);
        if (!deletedUser) {
            const error = new Error('User Not Found!');
            error.statusCode = 404;
            next(error);
        } else {
            res.json({ message: 'User deleted successfully what?', user: deletedUser });

        }
    } catch (err) {
        next(err);
    }
};