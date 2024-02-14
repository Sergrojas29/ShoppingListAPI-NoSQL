const db = require('./connection')

const { Book } = require('../models')

const testSetting = {
    settingTest: 'test'
}

const testlist = {
    listTest: ['egg', 'milk', 'bread']
}


sampleUser = [
    {username: 'SergTest', password: 'testpass', setting: testSetting, shoppingList: testlist,recoveryPassword: 'absegami'}
]

db.once('open', async () => {
    try {
        
        const books = await Book.insertMany(sampleBooks)
        console.log('Books Created')
        process.exit()
        
    } catch (error) {
        console.log(error)
        process.exit()
    }

})


