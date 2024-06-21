const Category = require('../Models/category');

const categoryController = {
    async addCategory(req, res, next){
        try{
            const { name } = req.body;
            const category = new Category({name});
            await category.save();
            res.status(201).send((category));
        }
        catch(error){
            res.status(400).send(error.message);
        }
    },

    async fetchCategory(req, res, next){
        try{
            const categories = await Category.find({});
            res.status(200).send(categories);
        }
        catch(error){
            res.status(400).send(error.message);
        }
    }
};

module.exports = categoryController;