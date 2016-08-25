"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Word = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var WordSchema = new Schema({
    eng: { type: String, required: true },
    rus: { type: String, required: true }
});

var Word = exports.Word = _mongoose2.default.model('words', WordSchema);
//# sourceMappingURL=Word.js.map