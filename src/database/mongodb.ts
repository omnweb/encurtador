import config from "../config/Constants";
import mongoose from "mongoose";
// Create connection

class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(`mongodb://localhost/shorturl`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
            mongoose.Promise = global.Promise;
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log(error);
        }
    }
}

export default MongoConnection;