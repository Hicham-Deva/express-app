const pool = require('../db');
const userRepo = require('../repositories/userRepository');

exports.getUsers = async(req, res) => {
    try {
        const users = await userRepo.getAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'error fetching users' });
    }
}
exports.createUser = async(req, res) => {
    try {
        const { name, email } = req.body;
        const createdUser = await userRepo.createUser(name, email);
        res.status(201).json({ message: 'a new user has been added!', user: createdUser })

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "no user has been added!" })
    }

}

exports.updateUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const updatedUser = await userRepo.updateUser(id, name, email);
        res.json({
            message: 'User updated successfully',
            user: updatedUser
        });


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'no user updated' });

    }

}


// 4. deleteUser (DELETE)
exports.deleteUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);

        const deletedUser = await userRepo.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting user' });
    }
};