const { Schema, model } = require('mongoose');

const coursesSchema = new Schema(
    {
    category: String,
    location: String,
    user:[ { type : Schema.Types.ObjectId, ref: 'User'}],
    coach: { type : Schema.Types.ObjectId, ref: 'Coaching', required: true },
    time: String
    },
    {
        timestamps: true  // created time, updated time 
    }
);
module.exports = model('Courses', coursesSchema);