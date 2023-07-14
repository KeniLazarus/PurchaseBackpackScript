require("dotenv").config();

console.log(process.env.PASSWORD);

export var userCredentials = {
    username: 'standard_user',
    password: process.env.PASSWORD
}
