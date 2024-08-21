import Router from 'express'
const routesClient = Router()

import { getClient, postClient, putClient, deleteClient } from '../controllers/clientController.js'; //desestructuración

routesClient.get('/', getClient)
routesClient.post('/', postClient)
routesClient.put('/', putClient)
routesClient.delete('/:id', deleteClient)

export default routesClient;