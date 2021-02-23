import mongoose from 'mongoose';

const db_name = "ts-task-app";
const URI = `mongodb://localhost/${db_name}`;
const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

async function connect() {
    try {
        const db = await mongoose.connect(URI, opts);
        if (db) {
            console.log('>>> DB is connected');
        } else {
            console.log('Error trying connect to db');
        };
    } catch (error) {
        console.error(error);
    }
}


export default connect;
