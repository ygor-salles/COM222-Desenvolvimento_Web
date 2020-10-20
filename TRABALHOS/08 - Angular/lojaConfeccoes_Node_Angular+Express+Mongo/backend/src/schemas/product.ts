import mongoose from 'mongoose'
const { Schema } = mongoose

export const ProductSchema = new Schema({
    codigo: String,
    descricao: String,
    valorUnitario: Number,
    desconto: Number,
})

export const Product = mongoose.model('Product', ProductSchema)
