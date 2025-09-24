//Import
import express from 'express';
import dotenv from 'dotenv';

//Env Setup
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

//DB Connection

//Middleware
app.use(express.json());
app.use((req, _res, next) => {
    console.log(`${req.method} - ${req.path}`);
    next();
});

//Global Err Handling
app.use((err, req, res, next) => {
    res.json({ msg: `X Error - ${err.message}`});
});

//Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});



