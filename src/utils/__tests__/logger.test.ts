import { logger } from "../logger.js";

describe("logger", () => {
  let infoSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;
  let debugSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    infoSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    debugSpy = jest.spyOn(console, "debug").mockImplementation(() => {});
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    infoSpy.mockRestore();
    warnSpy.mockRestore();
    debugSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it("logger.info should call console.log with string", () => {
    logger.info("test");
    expect(infoSpy).toHaveBeenCalledWith("test");
  });

  it("logger.info should call console.log with string", () => {
    logger.info("info");
    expect(infoSpy).toHaveBeenCalledWith("info");
  });

  it("logger.warn should call console.warn with string", () => {
    logger.warn("warn");
    expect(warnSpy).toHaveBeenCalledWith("warn");
  });

  it("logger.debug should call console.debug with string", () => {
    logger.debug("debug");
    expect(debugSpy).toHaveBeenCalledWith("debug");
  });

  it("logger.error should call console.error with string", () => {
    logger.error("error");
    expect(errorSpy).toHaveBeenCalledWith("error");
  });

  it("logger.info should stringify objects", () => {
    const obj = { a: 1, b: [2, 3] };
    logger.info(obj);
    expect(infoSpy).toHaveBeenCalledWith(JSON.stringify(obj, null, 2));
  });

  it("logger.info should stringify arrays", () => {
    const arr = [1, 2, { a: 3 }];
    logger.info(arr);
    expect(infoSpy).toHaveBeenCalledWith(JSON.stringify(arr, null, 2));
  });
});
