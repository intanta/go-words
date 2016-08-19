import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    eng     : { type: String, required: true },
    rus      : { type: String, required: true }
});

export const Word = mongoose.model('words', WordSchema);
