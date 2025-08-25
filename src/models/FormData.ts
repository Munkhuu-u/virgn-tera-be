// src/models/FormData.ts

import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormDataModel = mongoose.model("FormData", formDataSchema);

export default FormDataModel;
