const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TimerSchema=new Schema({
    ftime:{
        type:String
    },
    rtime:{
        type:String
    },
    nsession:{
        type:Number
    }
})

module.exports=mongoose.model('timer',TimerSchema);