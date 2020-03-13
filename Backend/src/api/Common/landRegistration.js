import mongoose from 'mongoose'

const landSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    survyNo: {
        type: String
    },
    area: {
        type: String
    },
    cultivated: {
        type: String
    },
    jaladhram: {
        type: String
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

const landRegistration = mongoose.model('landRegistrations', landSchema)

export default landRegistration