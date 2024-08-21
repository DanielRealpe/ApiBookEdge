import express from 'express';
import 'dotenv/config'
import dbConnection from '../database/config.js';
import routesClient from '../routes/clientRoute.js'

class Server {
    constructor() {
        this.app = express();
        this.listen()
        this.dbConnection()
        this.pathClient = '/api/Client'
        this.route()
    }

    async dbConnection() {
        await dbConnection()
    }

    route() {
        this.app.use(express.json())
        this.app.use(this.pathClient, routesClient)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    }
}

export default Server // Para exportar la clase server