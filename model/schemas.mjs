// Possible Objects
// Question / answer  / category
let question = {
    questionText: String,
    category: String,
    genre?: String,
    incorrectResponses: [String],
    correctAnswer: String,
    difficulty: String,
    timeStamp: Date,
    points?: Number,
    inActive?: Boolean
}
// User (admin) profile
let user = {
    username: String,
    isAdmin: Boolean,
    email: String,
    password: String,
    timeStamp: Date,
    badges?: [MongoID],
    incorrectQuestions: [MongoID]
}
// game
// session /game type
// leaderboard
let game = {
    user: MongoID,
    category: String,
    score: Number,
    completed: Boolean,
    createdAt: Date
}
// category collection? (stretch)
// lobby? (Stretch)
// let category = {
//     name: String,
//     active: Boolean
// }