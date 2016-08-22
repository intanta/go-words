import mongoose from "mongoose";

import config from '../etc/config.json';

import { Word } from './models/Word';

//const Word = mongoose.model('Word');

const databaseUri = process.env.MONGOLAB_URI ||
                    process.env.MONGOHQ_URL ||
                    `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

export function setUpConnection() {
    mongoose.connect(databaseUri, (err, res) => {
      if (err) { console.log ('ERROR connecting to: ' + databaseUri + '. ' + err); }
    });
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
