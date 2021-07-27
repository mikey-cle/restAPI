
const sql = require("../src/db/connection");
exports.createUser = (req, res) =>{
    
    try {
        const user = [
       req.body.username,
       req.body.email,
       req.body.password
        ];
     sql.query(`INSERT INTO movieusers(username, email, pass) values('${user[0]}', '${user[1]}', ${user[2]}) RETURNING *`, 
    user);
    res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: 'Create user unsuccessful'});
    }
}
