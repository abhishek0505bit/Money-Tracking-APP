const {transactionModel} = require('../models/transactionModel')

const testTransaction = (req, res)=>{
    res.json('transaction handled ')

}

const createTransaction = async (req, res)=>{
    
   try{const {name, price, description, dateTime } = req.body

   // 'transaction' is the object coming from database
    const transaction = await transactionModel.create({name, price, description, dateTime})// Transaction is the schema and model of the transaction
//    const newTransaction = new Transaction({name, description, dateTime})   
//    console.log(newTransaction.name);
    res.json(transaction);  
}

    catch(er)
    {
        console.log("not able to create transaction due to ", er," and the message is ", er.msg)
    }
}

const getTransactions = async (req, res)=>{
    const transactions = await transactionModel.find();
    res.json(transactions);


}

module.exports = {testTransaction, createTransaction, getTransactions};

// try{
//     const {name, dateTime, description} = req.body;
//     const newTransaction = new Transaction({name, dateTime, description,});
//     await newTransaction.save();
//     res.status(201).json(newTransaction);
//     }
//     catch(err)
//     {
//         res.status(500).json({message: "failed to create transaction"});
//     }