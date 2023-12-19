const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({path:"Backend/config/config.env"})
const connectDB = require("./config/database");
const port = process.env.PORT || 4000;


// Handling Uncaught Exception
process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to Uncaught Exception`);
    process.exit(1);
})


connectDB();



app.listen(port, () => {
    console.log(`your server is running on port ${port} `);
});



// Unhandled Promise Rejection

// process.on("unhandledRejection", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
//     server.close(() => {
//       process.exit(1);
//     });
// });