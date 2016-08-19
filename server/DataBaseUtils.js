import mongoose from "mongoose";

import config from '../etc/config.json';

import { Word } from './models/Word';

//const Word = mongoose.model('Word');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listWords(id) {
    return Word.find();
}

export function addWord(data) {
  console.log(data);
    const word = new Word({
        eng: data.eng,
        rus: data.rus
    });
console.log(word);
    return word.save();
}
