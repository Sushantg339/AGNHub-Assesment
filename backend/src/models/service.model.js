import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title : String,
    shortDescription :  String,
    detailedDescription: String
}, {timestamps: true})

const serviceModel = mongoose.model('Service', serviceSchema)

export default serviceModel