const User = require('../Models/user');
const userController = {
    async addUser(req, res, next){
        try{
            const {username} = req.body;
            const user = new User({ username });
            await user.save();
            res.status(201).send(user);
        }
        catch(error){
            res.status(400).send(error.message);
        }
    },

    async fetchUser(req, res, next){
        try{
            const users = await User.find({});
            res.status(200).send(users);
        }
        catch(error){
            res.status(400).send(error.message);
        }
    }
};

module.exports = userController;