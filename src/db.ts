import mongoose from 'mongoose';

const db_name = "ts_crud" 
const URI = `mongodb://localhost/${db_name}`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("DB is connected"));

