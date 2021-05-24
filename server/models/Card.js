const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    List: {
        type: Schema.Types.ObjectId,
        ref: 'List'
    }
});

module.exports = mongoose.model('Card', CardSchema);
