const { json } = require("express");
const Ground = require("../model/Ground")

const findAll = async(req,res)=> {
    try {
        const ground  = await Ground.find();
        res.status(200), json(ground);
    } catch (e) {
        req.json(e);
        
    }
}
const save = async(req,res) =>{
    try {
        const {name,description} = req.body
        const ground = new Ground({
            name,
            description,
            image:req.file.orginalname
        });
        await ground.save();
        res.status(201).json(ground)
    } catch (e) {
        
    }

}

const findById = async (req,res) =>{
    try{
        const ground =await Ground.findById(req.params.id);
        res.status(200).json(ground)

    } catch(e){
        res.json(e)
    }
}

const deleteById = async(req,res) =>{
    try{
        const ground =await Ground.findByIdAndDelete(req.params.id,req.body,{new:true});
        res.status(201).json("Data Deleted")
    } catch(e){
        res.json(e)
    }
}

const update = async (req,res) => {
    try {
        const ground = await Ground.findByIdAndUpdate(req.params.id , req.body,{new:true});
        res.status(201).json(ground)
        
    } catch (e) {
        res.json(e)
        
    }
}
module.exports ={
    findAll,
    save,
    findById,
    deleteById,
    update
}