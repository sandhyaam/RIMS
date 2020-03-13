import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    fatherName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    adharNo: {
        type: Number
    },
    occupation: {
        type: String
    },
    annualIncome: {
        type: Number
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    district: {
        type: String
    },
    mandal: {
        type: String
    },
    village: {
        type: String
    },
    houseNo: {
        type: String
    },
    pinCode: {
        type: Number
    },
    status: {
        type: String
    }

}, {
    timestamps: true
})

const user = mongoose.model('users', registerSchema)

export default user