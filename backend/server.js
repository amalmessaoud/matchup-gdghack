const express = require("express");const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();



const app = express();
app.use(express.json())
app.use("/users", require("./routes/userRoutes"))
const port = 3000;  

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})