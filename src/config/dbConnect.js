import mongoose from "mongoose"

mongoose.connect("mongodb+srv://MarsiaLuckner:<>@alura0.jqdvbvx.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
