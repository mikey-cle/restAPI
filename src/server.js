require('./db/connection');
const express = require('express');
const movieRouter = require('../routes/movie.route');
const app = express();
const port = process.eventNames.PORT || 5000;
const userRouter = require('../routes/user.route');

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});