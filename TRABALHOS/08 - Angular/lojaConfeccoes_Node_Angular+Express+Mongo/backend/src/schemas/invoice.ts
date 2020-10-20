import mongoose from 'mongoose'
const { Schema } = mongoose

export const InvoiceSchema = new Schema({
    nomeCliente: String,
    produtosComprados: Array,
})

export const Invoice = mongoose.model('Invoice', InvoiceSchema)
