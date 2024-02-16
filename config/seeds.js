const db = require('./connection')

const { User } = require('../models')

sampleUser = [
    {
        username: 'SergTest',
        password: 'testpass1',
        setting: {},
        recoveryPassword: 'absegami'
    },
    {
        username: 'Test2',
        password: 'testpass2',
        setting: {},
        recoveryPassword: 'hero'
    }
]

db.once('open', async () => {
    try {

        const users = await User.insertMany(sampleUser)
        console.log('User Created')
        process.exit()

    } catch (error) {
        console.log(error)
        process.exit()
    }

})


