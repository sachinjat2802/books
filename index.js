import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Router from "./routes/index.js";

dotenv.config();

/* The above class is an application class in JavaScript that sets up a server,
connects to a database, sets up middleware, and defines routes. */
class App {
  constructor() {
    this.app = express();
    this.setupDatabase();
    this.setupMiddleware();
    this.echo();

    this.setupRoutes();
  }

  async setupDatabase(retries = 5) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    } catch (error) {
      if (retries === 0) {
        console.log("No more retries. Exiting...");
        process.exit(1);
      }
      console.log(
        `Database connection failed. Retrying (${retries} attempts left)...`
      );
      // Wait for 5 seconds before retrying
      await new Promise((res) => setTimeout(res, 5000));
      return this.setupDatabase(retries - 1);
    }
  }

  setupMiddleware() {
    this.app.use(express.json());

    // Error handling middleware
    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Something broke!");
    });
  }

  echo() {
    this.app.get("/versions", (req, res) => {
      res.status(200).send({ "books API": process.env.npm_package_version });
    });
  }

  setupRoutes() {
    this.app.use("/", Router);
  }

  startServer() {
    this.app.listen(parseInt(process.env.PORT), () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  }
}

/* `const app = new App();` creates a new instance of the `App` class and assigns
it to the `app` constant. */
const app = new App();
app.startServer();
