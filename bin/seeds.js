const mongoose = require('mongoose');

const User = require('../models/User');
const Courses = require('../models/Courses');
const Coaching = require('../models/Coaching');
const Reviews = require('../models/Reviews');


//connection for the mongoose && promises 
mongoose.connect ('mongodb://localhost/CoachMe-Project')
.then(function (){
    console.log('connected to mongodb');
})
.catch (err => {
    console.log ('Error! connection to mongodb');
})

const courses = [
    {
        category: "sport",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177a"),
        time: "12:30"
    },
    {
        category: "life",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a10b1c6e1b0a2adb76d1"),
        time: "12:30"
    },
    {
        category: "career",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177b"),
        time: "15:30"
    },
    {
        category: "sport",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177a"),
        time: "15:30"
    },
    {
        category: "life",
        location: "Nantes",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a10b1c6e1b0a2adb76d1"),
        time: "14:00"
    },

    {
        category: "career",
        location: "Lille",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177b"),
        time: "15:30"
    },
    {
        category: "style",
        location: "Lille",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177c"),
        time: "16:30"
    },
    {
        category: "style",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177c"),
        time: "10:30"
    },
    {
        category: "Life",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a10b1c6e1b0a2adb76d1"),
        time:"13:00"
    },
    {
        category: "sport",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177a"),
        time:"10:00"
    }
]

// created the New coaches models
const coach = [
    {
        name: "Will",
        category : "sport",
    },
    {
        name: "Emily",
        category: "career"
    },
    {
        name: "Laura",
        category: "style"
    },
    {
        name: "Neil",
        category: "life"
    }
    ,
    
]

// // created the New review models
const review = [
    {
        user: [],
        category : "sport",
        location: "Paris",
        coach: mongoose.Types.ObjectId("61c9a070b89c80099d72177a"),
        text: "It was very helpful courses that I've ever took!"
    },
    {
        user:[],
        category : "life",
        location: "Paris",
        coach: mongoose.Types.ObjectId("61c9a10b1c6e1b0a2adb76d1"),
        text: "I changed my daily routine thanks to these courses!!" 
    }
]



// created the coaching
Coaching.create(coach)
.then(function (coachDB){
    console.log(`${coachDB.length} have been created 😃`);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})


// created the courses
Courses.create(courses)
.then(function (courseDB){
    console.log(`${courseDB.length} courses have been created 😃`);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})


// created the reviews
Reviews.create(review)
.then(function (reviewDB){
    console.log(`${reviewDB.length} Reviews have been created📕 `);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})
