import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";

// Import Local modules
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js"; 
import connectDB from "./config/db.config.js";

const app = express();
dotenv.config();



const PORT = 3000;


// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(cors({
  origin: "http://localhost:3000", // frontend origin
  credentials: true
}));


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
//UserRoutes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user/task", taskRoutes);



// Start the server and connect to MongoDB
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      [console.log(`Server is running on http://localhost:${PORT}`)];
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  });
