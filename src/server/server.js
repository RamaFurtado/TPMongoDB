import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "../config/database.js";
import bodyParser from "body-parser";
import router from "../routes/userRoutes.js";

export const startServer = async () => {
  try {
    await connectDB();
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", router);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};
