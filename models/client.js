import { Schema, model } from 'mongoose' //Dependencia para hacer transacciones hacia Mongo

const ClientSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: [true, 'The field ID is required'],

    },
    names: {
        type: String,
        required: [true, 'The field names is required'],
    },
    email: {
        type: String,
        required: [true, 'The field email is required'],
    },
    cellphone: {
        type: Number,
        required: [true, 'The field cellphone is required'],
    },
    address: {
        type: String,
        required: [true, 'The field address is required'],
    },
})

export default model('Client', ClientSchema, 'client')