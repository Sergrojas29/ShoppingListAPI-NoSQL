const { Schema } = require('mongoose')


const saveData = {
    autoComplete: true,
    darktheme: true,
    duplicates: false,
    list: ['EGGS'],
    checked: [],
    name: "Guest",
    saveOld: true,

}

const itemSchema = new Schema({name: String})
const checkedSchema = new Schema({name: String})

const settingSchema = new Schema(
    {
        autoComplete: {
            type: Boolean,
            default: false,
            required: true
        },
        darktheme: {
            type: Boolean,
            default: true,
            required: true
        },
        duplicates: {
            type: Boolean,
            default: false,
            required: true
        },
        list: [itemSchema],
        checked: [checkedSchema],
        saveOld: {
            type: Boolean,
            default: false,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);



module.exports = settingSchema