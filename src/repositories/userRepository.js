const pool = require('../db');

const getAllUsers = async() => {
    const result = await pool.query('SELECT * FROM USERS ORDER BY created_at DESC');
    return result.rows;
}
const createUser = async(name, email) => {
    const queryText = 'INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *';
    const result = await pool.query(queryText, [name, email]);
    return result.rows[0];
}

const updateUser = async(id, name, email) => {
    const queryText = 'UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *';
    const result = await pool.query(queryText, [name, email, id]);
    return result.rows[0];
}
const deleteUser = async(id) => {
    console.log(typeof(id));
    const queryText = 'DELETE FROM users WHERE id=$1 RETURNING *';

    const result = await pool.query(queryText, [id]);
    return result.rows[0];
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };