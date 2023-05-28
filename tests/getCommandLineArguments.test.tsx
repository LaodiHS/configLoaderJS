// import {describe, expect, test} from '@jest/globals';
// import {getCommandLineArguments } from '../src/index';



// describe('getCommandLineArguments', () => {
//   it('should correctly extract and parse command line arguments', () => {
//     // Set up mock command line arguments
//     process.argv = [
//       '/path/to/node',
//       '/path/to/script.js',
//       '--config=config.json',
//       '--verbose=true',
//       '--port=8080',
//     ];

//     // Call the function to get the command line arguments
//     const args = getCommandLineArguments();
  
//     // Assert the expected result
//     expect(args).toEqual({
//       script:'/path/to/script.js',
//       config: 'config.json',
//       verbose: true,
//       port: 8080,
//     });
//   });

//   it('should handle errors and fallback to default values when extracting and parsing command line arguments', () => {
//     // Set up mock command line arguments with invalid values
//     process.argv = [
//       '/path/to/node',
//       '/path/to/script.js',
//       '--config=false',
//       '--verbose=false',
//       'port=abc',
//     ];
    
//     // Call the function to get the command line arguments
//     const args = getCommandLineArguments();

//     // Assert the expected result with default values
//     expect(args).toEqual({
//       script:'/path/to/script.js',
//       config: false,
//       verbose: false,
//       port: 'abc',
//     });
//   });
// });