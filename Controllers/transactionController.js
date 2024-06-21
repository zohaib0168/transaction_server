const faker = require('faker');
const Transaction = require('../Models/transaction');
const User = require('../Models/user');
const Category = require('../Models/category');

const transactionController = {
    async generateRandomTransactions(req, res, next){
        try{
            const {count} = req.body;
            const categories = await Category.find({});
            const users = await User.find({});
            if(users.length===0){
                return res.status(400).send('No user found');
            }
            if(categories.length===0){
                return res.status(400).send('No category found');
            }
            const transactions = [];

            for (let i = 0; i < count; i++){
                const randomUser = users[Math.floor(Math.random()*users.length)];
                const randomCategory = categories[Math.floor(Math.random()*categories.length)];
                const randomAmount = faker.finance.amount();

                transactions.push({
                    userId: randomUser._id,
                    categoryId: randomCategory._id,
                    amount: randomAmount
                });
            }
            const result = await Transaction.insertMany(transactions);
            res.status(201).send(result);
        }
        catch(error){
            res.status(400).send(error.message);
        }
    },

    async fetchTransactions(req, res, next){
        try{
            const {userId, categoryId} = req.query;
            let query = {};
            if (!userId && !categoryId){
                return res.status(400).send('UserId or CategoryId is required')
            }
            if(userId) query.userId = userId;
            if(categoryId) query.categoryId = categoryId;

            const transactions = await Transaction.find(query).populate('userId').populate('categoryId');
            res.status(200).send(transactions);
        }
        catch(error){
            res.status(400).send(error.message);
        }
    }
};

module.exports = transactionController;