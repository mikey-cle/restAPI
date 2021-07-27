const { Router } = require('express');
const {createUser} = require('../controllers/user.controllers');
const userRouter = Router();

userRouter.post('/users', createUser);
module.exports = userRouter;
