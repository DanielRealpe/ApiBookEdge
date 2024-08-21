import { connect } from 'mongoose';

const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_CNN)
        console.log('MongoDB connected...');
    } catch (error) {
        console.log('Error connecting to Mongo :c')
    }
}

export default dbConnection;