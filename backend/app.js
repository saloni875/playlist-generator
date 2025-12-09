import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/test", (req, res) => {
  res.json({ message: "Backend working!" });
});



app.use("/auth", authRoutes);

export default app;
