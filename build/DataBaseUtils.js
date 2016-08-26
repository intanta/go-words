'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.isConnected = isConnected;
exports.listWords = listWords;
exports.addWord = addWord;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../etc/config.json');

var _config2 = _interopRequireDefault(_config);

var _Word = require('./models/Word');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var databaseUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://' + _config2.default.db.host + ':' + _config2.default.db.port + '/' + _config2.default.db.name;

function setUpConnection() {
    _mongoose2.default.connect(databaseUri, function (err, res) {
        if (err) {
            console.log('ERROR connecting to: ' + databaseUri + '. ' + err);
        }
    });
}

function isConnected() {
    return _mongoose2.default.connection.readyState === 1 ? true : false;
}

function listWords(id) {
    return _Word.Word.find();
}

function addWord(data) {
    var word = new _Word.Word({
        eng: data.eng,
        rus: data.rus
    });
    return word.save();
}
//# sourceMappingURL=DataBaseUtils.js.map