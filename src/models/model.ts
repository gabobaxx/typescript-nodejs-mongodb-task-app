import mongoose, { Schema, model } from 'mongoose';

export interface Scheme extends mongoose.Document {
    title: string;
};

const scheme = new Schema({
    title: String
});

export default scheme<Scheme>('Scheme', schema);
