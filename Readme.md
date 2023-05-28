# Package Name

Package Name is a powerful package for handling configurations and command line arguments in your Node.js applications.

## Installation

You can install the package using npm:

npm install package-name

## Usage

### Loading Configuration

To load the configuration from an environment file, use the `loadConfig` function:

```javascript

const { loadConfig } = require('package-name');

const config = loadConfig();

console.log(config);

const { getCommandLineArguments } = require('package-name');

const args = getCommandLineArguments();

console.log(args);
```
```javascript
This will load the configuration from the environment file and return an object containing the key-value pairs.
Getting Command Line Arguments

To retrieve the command line arguments, use the getCommandLineArguments function:

const { getCommandLineArguments } = require('package-name');

const args = getCommandLineArguments();

console.log(args);
```
This will return an object containing the command line arguments passed to your Node.js application.
Parsing Configuration Files

To parse configuration files, use the parseConfig function:

```typescript
const { parseConfig } = require('package-name');

const configFile = 'config.ini';

parseConfig(configFile)
  .then((parsedConfig) => {
    console.log(parsedConfig);
  })
  .catch((error) => {
    console.error(error);
  });
```

This function accepts a single file location or an array of file locations. It will parse the specified configuration file(s) and return an object containing the parsed configurations.
Examples
Example 1: Loading Configuration

```typescript
const { loadConfig } = require('package-name');

const config = loadConfig();

console.log(config);


Output:

{ key1: 'value1', key2: 'value2' }
```

Example 2: Getting Command Line Arguments

javascript

```typescript
const { getCommandLineArguments } = require('package-name');

const args = getCommandLineArguments();

console.log(args);

```

Output:



[ 'arg1', 'arg2', 'arg3' ]

Example 3: Parsing Configuration Files

javascript
```typescript
const { parseConfig } = require('package-name');

const configFiles = ['config.ini', 'config.json'];

parseConfig(configFiles)
  .then((parsedConfig) => {
    console.log(parsedConfig);
  })
  .catch((error) => {
    console.error(error);
  });
```
Output:


```typescript
{
  'config.ini': {
    SECTION: { key1: 'value1', key2: 'value2' }
  },
  'config.json': {
    key1: 'value1',
    key2: 'value2'
  }
}
```
License

This package is licensed under the MIT License.

