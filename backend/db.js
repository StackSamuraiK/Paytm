const {Schema} = mongoose
const mongoose = require ('mongoose');
mongoose.connect("mongodb+srv://kshitizsrivastav3344:BVlkbEPMqeOL2wQK@cluster0.rnnttmu.mongodb.net/")

  const UserSchema = new Schema({
    username:{
        type:String,
        unique:true,
        type:require,
        trim: true,
        lowercase:true,
        maxlegnth:15,
        minlength:7
    },
    firstName:{
        type: String,
        require:true,
        maxlegnth:33
    } , 
    lastName:{
        type:String ,
        require:true,
        maxlegnth:33
    },
    password:{
        type: String,
        require:true,
        minlength:6,
        specialCharacter: true,
        maxlegnth:18
    }
});

const User = mongoose.model('User' , UserSchema)
module.exports ={User} ;