const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const userRoutes = require("./Routes/UserRoutes");
const showRoutes = require("./Routes/ShowRoutes");

const app = express();


app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/api/shows", showRoutes); 
app.use("/uploads", express.static("uploads")); 

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.log(err));
