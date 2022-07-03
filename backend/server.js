const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")
const cloudinary = require("cloudinary");
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
dotenv.config({path:"backend/config/config.env"});
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const server=app.listen(process.env.port,()=>{
    console.log(`Server is working on port http://localhost:${process.env.PORT}`);
})
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });