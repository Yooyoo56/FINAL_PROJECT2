const { Schema, model } = require('mongoose');

const coachingSchema = new Schema(
    {
    category: String,
    name: String,
    },
    {
        timestamps: true  // created time, updated time 
    }
);
module.exports = model('Coaching', coachingSchema);