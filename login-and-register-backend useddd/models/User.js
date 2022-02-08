import  mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
   email:{
   type: String,
   required: true
   },
   password: String
});

const model = mongoose.model("User", schema);
export default model;