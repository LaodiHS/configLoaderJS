// import { loadConfig } from "../src/index";
// import dotenv from "dotenv";
// import fs from "fs";
// // Mock the dotenv module

// jest.mock("dotenv", () => ({
//   config: jest.fn().mockReturnValue({ parsed: { KEY: "value" } }),
// }));

// describe("loadConfig", () => {
//   beforeEach(() => {
//     // Reset any configurations or mocks before each test
//     jest.resetModules();
//     jest.clearAllMocks();
//   });

//   it("should load the configuration successfully", () => {
//     // Call the loadConfig function

//     loadConfig();
//     // Assertion: Ensure dotenv.config is called
//     expect(dotenv.config).toHaveBeenCalledTimes(1);
//   });

//   it("should handle and log errors if configuration fails", () => {
//     const error = new Error("Failed to load configuration");
//     jest.spyOn(dotenv, "config").mockReturnValue({ error });

//     // Mock the console.error function
//     const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

//     // Call the loadConfig function
//     loadConfig();

//     // Assertion: Ensure dotenv.config is called
//     expect(dotenv.config).toHaveBeenCalledTimes(1);

//     // Assertion: Ensure error is logged to console
//     expect(consoleErrorMock).toHaveBeenCalledWith(`Error: ${error.message}`);

//     // Clean up mocks
//     consoleErrorMock.mockRestore();
//   });
// });

