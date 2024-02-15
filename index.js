const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const connection = require("./connection");
const userRouter = require("./routes/userRoute");
const openapiSpecification = require("./swagger/swaggerDoc");


const app = express();

const PORT = process.env.PORT ;

app.use(express.json());
app.use(cors());

app.use("/apidocs",swaggerUi.serve,swaggerUi.setup(openapiSpecification));

app.get("/",(req,res)=>{
        res.status(200).send({"msg":"This is a home page"})
});

app.use("/user",userRouter);

app.listen(PORT,async()=>{
     try{
           await connection ;
           console.log("Server is connected to DB");
           console.log(`Server is running at http://localhost:${PORT}`);
     }catch(error){
        console.log(error.message);
     }
})