import mongoose from "mongoose";

export default async function () {
  mongoose
    .connect("mongodb+srv://user:1234@cluster0.2svbez1.mongodb.net/Hyrr")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB");
    });
}
