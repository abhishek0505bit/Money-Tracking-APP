const {model, Schema} = require('mongoose')

// here we define the schema of the transaction, its type and required status
// this schema you will see in the mongo db
const transactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    dateTime: {type: Date, required: true},
    description: {type: String, required: true},    
})

// model takes two arguments: the name of the model, schema which the object should follow
// the below line is related with mongodb: store the data in the form of transactionSchema, and the name of the document is :'transaction', then name of collection will become 'transactions'
const transactionModel = model('Transaction', transactionSchema);// always use 'capitalized'form, this is the mongoose convention, for eg: Transaction, User, etc
// the 'Transaction' inside model() is act as a single document, which will become 'Transactions' in the mongo db, 
// if you see you will find a collection created with name 'transactions'

// export the transactionModel
module.exports = {transactionModel};