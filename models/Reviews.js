const { Schema, model, Mongoose } = require('mongoose');

const reviewSchema = new Schema(
    {
    category: String,
    email : String,
    location: String,
    text: String,
    user: { type : Schema.Types.ObjectId, ref: 'User', required: true},
    coach: { type : Schema.Types.ObjectId, ref: 'Coaching', required: true },
   //- Array of object IDs referencing the celebrity model (basically, the array of celebrities' IDs)
    },
    {
        timestamps: true  // created time, updated time 
    }
);

module.exports = model('Reviews', reviewSchema);