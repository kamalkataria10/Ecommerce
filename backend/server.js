const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });
dotenv.config({path:"backend/config/config.env"});
connectDatabase();
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