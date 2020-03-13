import mongoose from 'mongoose'

const requestConSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    connectionType: {
        type: String
    },
    RegistrationNo: {
        type: String
    },
    userName: {
        type: String
    },
    applyName: {
        type: String
    },
    phoneNo: {
        type: Number
    },
    month: {
        type: String
    },
    date: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    },

}, {
    timestamps: true
})

const requestConnection = mongoose.model('requestConnections', requestConSchema)

export default requestConnection