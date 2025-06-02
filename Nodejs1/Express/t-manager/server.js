import exprerss from "express";
import dotenv from "dotenv";
import session from "express-session";

// Import Local modules
import userRoutes from "./routes/user.routes.js";
import connectDB from "./config/db.config.js";

const app = exprerss();
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
app.use(exprerss.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
//UserRoutes
app.use("/api/v1/user", userRoutes);


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
