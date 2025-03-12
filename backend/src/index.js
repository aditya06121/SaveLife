import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./env" }); // Load environment variables

const port = process.env.PORT || 8000;

connectDB()
  .then(
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    })
  )
  .catch((error) => {
    console.error(`database connection failed`, error);
  });
