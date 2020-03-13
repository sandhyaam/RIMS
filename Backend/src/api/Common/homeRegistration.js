import mongoose from 'mongoose'

const homeRegisterSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    houseNo: {
        type: String,
        unique: true
    },
    houseRegNo: {
        type: String
    },
    Squarefeets: {
        type: Number
    },
    tax: {
        type: String
    },
    status: {
        type: String
    }
}, {
    timestamps: true
})
const homeRegistration = mongoose.model('homeRegistrations', homeRegisterSchema)

export default homeRegistration