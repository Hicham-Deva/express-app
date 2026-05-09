const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorHandler');

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

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
    console.log('the server listen on port :', port);
})