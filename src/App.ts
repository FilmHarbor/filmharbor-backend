import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { logger } from "./utils/logger.js";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
          },
        },

        crossOriginEmbedderPolicy: true,
      })
    );

    this.app.use(cors());
    this.app.use(morgan("dev"));

    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    this.app.get("/health", (_, res) => res.json({ status: "ok" }));
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      logger.info(`🚀 Server running on port ${port}`);
    });
  }
}

export default App;
