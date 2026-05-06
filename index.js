const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
})
app.use('/users', userRoutes);
app.use((req, res, next) => {
    res.status(404).json({ message: 'bad url' });
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "server error!" });
})


const port = 3000;
app.listen(port, () => {
    console.log('the server listen on port :', port);
})