// const Client = require('../models/client')
import Client from '../models/client.js'
//Get all documents from client
export async function getClient(req, res) {
    const client = await Client.find()
    res.json(client)
}

export async function postClient(req, res) {
    const body = req.body //Get the body send from postman or a form
    let msg = 'Client inserted succsesul'
    try {
        const client = new Client(body) //Create the object Vehicle in RAM
        await client.save() //Insert object at the collection
    }
    catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

export async function putClient(req, res) {
    const { id, names, email, cellphone, address } = req.body //Desestructuración
    let msg = 'Client updated succsefully'
    try {
        await Client.findOneAndUpdate({ id: id }, { names: names, email: email, cellphone: cellphone, address: address }) //Primeras llaves corresponden al filtro (where) y despues de la coma van las modificaciones
    } catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

export async function deleteClient(req, res) {
    const _id = req.params.id //Get param _id
    try {
        await Client.findByIdAndDelete({ _id: _id }) //Delete object by
        res.json('Client deleted successfully!')
    } catch (error) {
        res.status(500).json(error, { msg: 'There was a problem deleting the client' })

    }
}

// module.exports = { //Export functions
//     getClient,
//     postClient,
//     putClient,
//     deleteClient
// }