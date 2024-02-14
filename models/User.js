const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');
const settingSchema = require('./Setting')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            require: true
        },
        setting: [settingSchema],
        recoveryPassword: {
            type: String,
            require: false,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const User = model('User', userSchema);




module.exports = User