import mongoose from 'mongoose'

const waterSchema = new mongoose.Schema({
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
}, {
    timestamps: true
})
const waterConnection = mongoose.model('waterConnections', waterSchema)

export default waterConnection