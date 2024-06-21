require('dotenv').config();

const PORT = process.env.PORT;
const CONNECTION_PATH = process.env.CONNECTION_PATH;

module.exports = {
    PORT,
    CONNECTION_PATH
}
