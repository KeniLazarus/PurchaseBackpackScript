require("dotenv").config();

console.log(process.env.PASSWORD);

export var username = {
    username: 'standard_user',
}

export var password = {
    password: process.env.PASSWORD,
}