'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listWords = listWords;
exports.addWord = addWord;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../etc/config.json');

var _config2 = _interopRequireDefault(_config);

var _Word = require('./models/Word');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const Word = mongoose.model('Word');

var databaseUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name;

function setUpConnection() {
    _mongoose2.default.connect(databaseUri, function (err, res) {
        if (err) {
            console.log('ERROR connecting to: ' + databaseUri + '. ' + err);
            return false;
        }
        return true;
    });
}

function listWords(id) {
    return _Word.Word.find();
}

function addWord(data) {
    console.log(data);
    var word = new _Word.Word({
        eng: data.eng,
        rus: data.rus
    });
    console.log(word);
    return word.save();
}
//# sourceMappingURL=DataBaseUtils.js.map