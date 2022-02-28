import fs from "fs";
import mongoose from "mongoose";
import product from "../model/productSchema.js";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env);

// const DB = process.env.DATABASE.replace("<password>", process.env.DB_PASSWORD);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const DB = `mongodb+srv://${username}:${password}@cluster0.ehqvq.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected is succesfully"));

const productData = JSON.parse(
  fs.readFileSync("./constants/product.json", "utf-8")
);

const importData = async () => {
  try {
    await product.create(productData);
    console.log("Data is succesfully loaded");
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await product.deleteMany();
    console.log("Data is succesfully deleated");
  } catch (error) {
    console.log(error);
  }
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
