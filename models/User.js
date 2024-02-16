const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');
const settingSchema = require('./Setting')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique: true,
            trim: true
        },
        password: {
            type: String,
            require: true,
            minlength: 5
        },
        setting: settingSchema,
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

//!map is since its and array function( nextmiddle , data returned? )
//! 'insertMany when that is run the pre is active
userSchema.pre('insertMany', function (next, data) {
    data.map(e => {
        e.password = bcrypt.hashSync(e.password, 10)
        e.recoveryPassword = bcrypt.hashSync(e.recoveryPassword, 10)
    })

    next();
});


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('recoveryPassword')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (recoveryPassword) {
    return bcrypt.compare(recoveryPassword, this.recoveryPassword);
  };





// userSchema.virtual('newPassword').set(function (newPassword) {
//     // Hash the password using bcrypt
//     const hashedPassword = bcrypt.hashSync(newPassword, 10);
//     // Set the hashed password to the 'password' field
//     this.password = hashedPassword;
// });



// userSchema.pre('insertMany', async function (next) {
//     console.log(docs)
//     next();
// })


// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// })

// userSchema.virtual('hashedPassword').set(function(newPassword) {
//     const saltRounds = 10;
//     this.password = bcrypt.hashSync(newPassword, saltRounds);
// });

// // Middleware to handle insertMany
// userSchema.pre('insertMany', function(next, docs) {
//     for (let doc of docs) {
//         if (doc.password) {
//             doc.hashedPassword = doc.password; // Set hashedPassword virtual
//         }
//     }
//     next();
// });

// userSchema.virtual('foo').set(function (bar){
//     // console.log(this)
//     next();
// });

// userSchema.pre('insertMany', function(next, docs) {
//     for (let doc of docs) {
//         if (doc.password) {
//             doc.hashedPassword = doc.password; // Set hashedPassword virtual
//         }
//     }
//     console.log(docs)
//     next();
// });





const User = model('User', userSchema);




module.exports = User