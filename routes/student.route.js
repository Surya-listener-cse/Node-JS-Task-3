import express from 'express';
import { createStudent, getStudents, getStudentWithoutMentor, mentorAssign } from '../services/student.service.js';

const router = express.Router();



router.post("/create", async (request, response) => {
    try {
        const data = request.body;
        const result = await createStudent(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});



router.get("/students", async (request, response) => {
    try {
        const result = await getStudents();
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});



router.get("/no-mentor", async (request, response) => {
    try {
        const result = await getStudentWithoutMentor();
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});



router.put("/student/:id", async (request, response) => {
    try {
        const data = request.body;
        const result = await mentorAssign(data);
        response.send(result);
    } catch (err) {
        console.log(err);
    }
});


export default router;