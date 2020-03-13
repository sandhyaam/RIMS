import mongoose from 'mongoose'

const gasSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    bill: {
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
},
    {
        timestamps: true
    })
const gas = mongoose.model('gasConnections', gasSchema)

export default gas