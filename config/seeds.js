const db = require('./connection')

const { User, Setting } = require('../models')

const testSetting = {
    autoComplete: true,
    darktheme: true,
    duplicates: false,
    list: [],
    checked: [],
    saveOld: true,

}


sampleUser = [
    {username: 'SergTest', password: 'testpass', setting: testSetting, recoveryPassword: 'absegami'},
    {username: 'Test2', password: 'testpass', setting: testSetting, recoveryPassword: 'hero'}
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


