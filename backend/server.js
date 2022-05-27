const app=require("./app");
const dotenv=require("dotenv");

dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.port,()=>{
    console.log(`Server is working on port http://localhost:${process.env.port}`)
})