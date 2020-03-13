import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    accountHolder: {
        type: String
    },
    accountNo: {
        type: String
    },
    branch: {
        type: String
    },
    bankName: {
        type: String
    },
    ifsc: {
        type: String
    },
    amount: {
        type: String
    }
}, {
    timestamps: true
});

const account = mongoose.model('accountDetails', accountSchema)

export default account