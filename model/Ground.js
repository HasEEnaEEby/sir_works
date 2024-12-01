const mongoose=require("mongoose")

const groundSchema = new mongoose.Schema ({
    name :{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    
})

const Ground= mongoose.model("grounds",groundSchema);
module.exports=Ground;