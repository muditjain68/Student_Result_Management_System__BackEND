import ResultModal from "../models/result.js";


export const postResult = async(req,res)=>{
    const {usn,fname,lname,fatherName,motherName,department,branch,sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8} = req.body;

    try{
        await ResultModal.create({usn,fname,lname,fatherName,motherName,department,branch,sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8});
        res.send("created");

    }
    catch(error){
        
        res.sendStatus(500).json({ message: "Something went wrong" });
            
        console.log(error);
        }
}


export const getResult = async(req,res)=>{
    const usn = req.params.id.toUpperCase();

    try{
        const data = await ResultModal.findOne({usn:usn});
        res.send(data);
    }
    catch(errror){
        console.log(error);
        res.send("something went wrong");
    }
}