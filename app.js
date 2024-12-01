require('dotenv').config(); // Load environment variables
import express, { json } from "express";
import connectDB from "./config/db";
import CustomerRouter from "./routes/customerRoutes";
import GroundRouter from "./routes/GroundRoutes";
import AuthRouter from "./routes/authRoutes";

const app = express();

connectDB();

app.use(json());

app.use("/api/customer", CustomerRouter);
app.use("/api/ground", GroundRouter);
app.use("/api/auth", AuthRouter);

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
