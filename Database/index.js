const mongoose = require('mongoose');
const { CONNECTION_PATH } = require('../Config/index')

const dbConnection = async () => {
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(CONNECTION_PATH);
        console.log(`Database is connected with the host: ${conn.connection.host}`);
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnection;