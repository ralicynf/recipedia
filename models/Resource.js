const mongoose = require('mongoose');

const Schema = mongoose.Schema 

const Resource = new Schema(
    {
        name: { type: String, required: true },
        definition: { type: String, required: true}
    }
)

module.exports = mongoose.model('Resource', Resource)
