const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:fr33bird@localhost:5432/');

const connectionTest = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection established')
    } catch (error) {
        console.log(error);
    }
}
connectionTest();
module.exports = sequelize;