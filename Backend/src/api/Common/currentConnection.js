import mongoose from 'mongoose'

const currentSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    bill: {
        type: Number
    },
    units: {
        type: String
    },
    RegistrationNo: {
        type: String
    },
    month: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: String
    }

}, {
    timestamps: true
})

const current = mongoose.model('currentConnections', currentSchema)

export default current