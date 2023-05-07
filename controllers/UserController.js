const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = async(req, res) => {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(username, email, hash);
    let userobj = {
        username: username,
        email: email,
        password: hash
    }

    UserModel.find({ username }).then((data) => {
        if(data.length !== 0) {
            res.json({ message: `user with ${username} already exists!...` });
        }else {
            UserModel(userobj).save().then((data) =>
                res.send({ message: `User ${username} registered successfully!...`, data })
            )
            .catch((error) =>
                res.json({message: `User registration unsuccessful !... Please try again...`, error})
            );
        }        
    });
};

const userLogin = async (req, res) => {
    UserModel.find({ username: req.params.username }).then((data) => {
        if (data.length !== 0) {
            res.send({ message: `User ${data[0].username} logged in successfully!...`, data });
        }else {
            res.json({ message: `User not registered!...` });
        }
    });
};

module.exports = {
    addUser,
    userLogin
}