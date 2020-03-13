import mongoose, { STATES } from 'mongoose'

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    account: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "accountDetails"
    },
    accountHolder: {
        type: String
    },
    accountNo: {
        type: String
    },
    tax: {
        type: String
    }
}, {
    timestamps: true
});

const payment = mongoose.model('payments', paymentSchema)

export default payment