let users = []
exports.getUsers = (req, res) => {
    res.json(users);
};
exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json({
        message: "new user has been added!",
        data: newUser
    })
}

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: `The user not found` })
    }
    users[userIndex] = {...users[userIndex], ...req.body }
    res.json({ message: "the user updated", user: users[userIndex] });
}

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.status(203).json({ message: `the user ${id} deleted!` });
}