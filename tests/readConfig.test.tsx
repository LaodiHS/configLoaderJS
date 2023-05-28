// import { loadConfig } from "../src/index";
//  import * as dotenv from "dotenv";
// // import fs from "fs";
// jest.mock("dotenv", () => ({
//     config: jest.fn().mockReturnValue({
//       parsed: {
//         DB_HOST: "localhost",
//         DB_PORT: "5432",
//         DB_USER: "myusername",
//         DB_PASSWORD: "mypassword",
//       },
//     }),
//   }));
  
//   describe("loadConfig", () => {
//     beforeEach(() => {
//       // Reset any configurations or mocks before each test
//       jest.clearAllMocks();
//     });
  
//     it("should load the configuration successfully", () => {
//       // Call the loadConfig function
//     //   console.log('dotenv', dotenv.config())
//       const config: { [key: string]: any } = loadConfig();
  
    
//       // Assertion: Ensure the correct types are returned
//       expect(config.DB_HOST).toBe("localhost");
//       expect(config.DB_PORT).toBe(5432);
//       expect(config.DB_USER).toBe("myusername");
//       expect(config.DB_PASSWORD).toBe("mypassword");
//     });
//   });
  