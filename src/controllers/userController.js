const pool = require('../db');

exports.getUsers = async(req, res) => {
    try {
        const result = await pool.query("select * from users order by created_at desc");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'error fetching users' });
    }
}
exports.createUser = async(req, res) => {
    try {
        const { name, email } = req.body;
        const queryText = 'insert into users (name,email) values($1,$2) returning *';
        const result = await pool.query(queryText, [name, email]);
        res.status(201).json({ message: 'a new user has been added!', user: result.rows[0] })

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "no user has been added!" })
    }

}

exports.updateUser = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id)
        const { name, email } = req.body;
        const queryText = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
        const result = await pool.query(queryText, [name, email, id]);
        res.json({
            message: 'User updated successfully',
            user: result.rows[0]
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

        const queryText = 'DELETE FROM users WHERE id = $1 RETURNING *';

        const result = await pool.query(queryText, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting user' });
    }
};