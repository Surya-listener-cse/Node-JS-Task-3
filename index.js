import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
import mentorRouter from './routes/mentor.route.js';
import studentRouter from './routes/student.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;



const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('MongoDB is Connected!!!');

app.use(express.json());



app.get("/", function (request, response) {
    response.send("The server is running for task Node Day3 - Assign Mentor!!!");
});



app.use("/mentor", mentorRouter);
app.use("/student", studentRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


export { client };