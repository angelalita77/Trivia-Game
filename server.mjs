//Import
import express from 'express';
import dotenv from 'dotenv';
import {globalErr, log} from './middleware/middleware.mjs'


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
app.use(globalErr);
app.use(log);

//Listener
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});



