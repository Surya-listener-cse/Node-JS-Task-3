import { ObjectId } from 'mongodb';
import { client } from '../index.js';



export async function createMentor(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .insertOne(data);
}



export async function getMentors() {
    return await client.db('assignMentor')
        .collection('mentors')
        .find({})
        .toArray();
}


export async function addStudents(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .updateOne({ _id: ObjectId(data.id) }, { $push: { students: ObjectId(data) } });
}



export async function studentsForMentor(data) {
    return await client.db("assignMentor")
        .collection("mentors")
        .find({ _id: ObjectId(data.id) }, { name: 1, students: 1, _id: 0 })
        .toArray();
}