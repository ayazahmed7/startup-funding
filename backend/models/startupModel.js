const { Schema, model, Types } = require("../connection");


const userSchema = new Schema({
  owner: { type: Types.ObjectId, required: true },  
  contacts: [String],
  website: String,
  title: { type: String },
  type: { type: String },
  fundExpecting: { type: Number },
  complete:  {type: Boolean, default: false },
  created_at: Date,
});



module.exports = model("startup", userSchema);
