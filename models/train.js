const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId
    },
    trainName: {
        type: String,
        required: true
    },
    trainNumber: {
        type: Number,
    },

    depatrureTime: [
        {
            "Hours": {
                type: Number,
                required: true
            },
            "Minutes": {
                type: Number,
                required: true
            },
            "Seconds": {
                type: Number,
                required: true
            }
        }
    ],
    seatsAvailable: [
        {
            sleeper: {
                type: Number,
                required: true
            },
            AC: {
                type: String,
                required: true
            }
        }
    ],
    price: [
        {
            sleeper: {
                type: Number,
                required: true
            },
            AC: {
                type: String,
                required: true
            }
        }
    ],
    delayedby: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('post', TrainSchema);