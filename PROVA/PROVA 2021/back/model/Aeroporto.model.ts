import mongoose from 'mongoose'
const { Schema } = mongoose

export const AeroportSchema = new Schema({
    aeroporto: String,
    cidade: String
})

export const Aeroporto = mongoose.model('aerocollection', AeroportSchema)