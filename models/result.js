import mongoose from "mongoose";

const subjectScehma = mongoose.Schema({
    subjectName:String,
    marks: String
})
const resultSchema = new mongoose.Schema({
    usn:String,
    fname: String,
    lname: String,
    fatherName: String,
    motherName: String,
    department: String,
    branch: String,
    sem1:[subjectScehma],
    sem2:[subjectScehma],
    sem3:[subjectScehma],
    sem4:[subjectScehma],
    sem5:[subjectScehma],
    sem6:[subjectScehma],
    sem7:[subjectScehma],
    sem8:[subjectScehma],
});


export default mongoose.model("Result", resultSchema);