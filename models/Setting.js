const { Schema } = require('mongoose')


const saveData = {
    autoComplete: true,
    darktheme: true,
    duplicates: false,
    list: ['EGGS', 'BREAD', 'MILK'],
    checked: [],
    name: "Guest",
    saveOld: true,

}

const itemSchema = new Schema({ type: [String], default: ['EGGS', 'BREAD', 'MILK'] })
const checkedSchema = new Schema({ type: [String], default: ['APPLE', 'BEEF',] })

const settingSchema = new Schema(
    {
        autoComplete: {
            type: Boolean,
            default: true,
            // required: true
        },
        darktheme: {
            type: Boolean,
            default: false,
        },
        duplicates: {
            type: Boolean,
            default: false,
        },
        list: {
            type: [String],
            default: ['BREAD', 'EGGS', 'MILK']
        },
        checked: {
            type: [String],
            default: ['BREAD', 'EGGS', 'MILK']
        },
        saveOld: {
            type: Boolean,
            default: false,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);



module.exports = settingSchema