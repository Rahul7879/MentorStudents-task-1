const mongoose = require("mongoose")



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/mentorStudent');
    console.log("Connection establish successful")
}
main().catch(err => console.log(err));