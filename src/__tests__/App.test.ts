import request from "supertest";
import App from "../App.js";
import { logger } from "../utils/logger.js";

import type { Server } from "node:http";

describe("App", () => {
  let appInstance: App;

  beforeAll(() => {
    appInstance = new App();
  });

  it("should create an express app instance", async () => {
    expect(appInstance.app).toBeDefined();
  });

  it("should respond 200 and {status: 'ok'} for GET /health", async () => {
    const res = await request(appInstance.app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("should respond 404 for unknown route GET /", async () => {
    const res = await request(appInstance.app).get("/");

    expect(res.status).toBe(404);
  });

  it("should call listen method", () => {
    const listenSpy = jest.spyOn(appInstance.app, "listen").mockImplementation((port, callback) => {
      if (callback) {
        callback();
      }

      logger.info(`🚀 Server running on port ${port}`);
      return {} as Server;
    });

    const loggerSpy = jest.spyOn(logger, "info");
    appInstance.listen(3000);

    expect(listenSpy).toHaveBeenCalledWith(3000, expect.any(Function));
    expect(loggerSpy).toHaveBeenCalledWith(`🚀 Server running on port 3000`);
    loggerSpy.mockRestore();
  });
});
