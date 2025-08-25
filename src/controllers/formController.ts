// src/controllers/formController.ts
import { Request, Response } from "express";
import FormDataModel from "../models/FormData";

export const submitForm = async (req: Request, res: Response) => {
  try {
    const data = await FormDataModel.create(req.body);
    res.status(201).json({ message: "Form submitted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error saving form", error });
  }
};
