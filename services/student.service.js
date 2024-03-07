import { ObjectId } from 'mongodb';
import { client } from '../index.js';



export async function createStudent(data) {
    return await client.db("assignMentor").
        collection("students").
        insertOne(data);
}



export async function getStudents() {
    return await client.db("assignMentor")
        .collection("students")
        .find({})
        .toArray();
}



export async function getStudentWithoutMentor() {
    return await client.db("assignMentor")
        .collection("students")
        .find({ mentor: undefined })
        .toArray();
}



export async function mentorAssign(data) {
    return await client.db("assignMentor")
        .collection("students")
        .updateOne({ _id: ObjectId(data.id) }, { name: 1, students: 1, _id: 0 })
        .toArray();
}