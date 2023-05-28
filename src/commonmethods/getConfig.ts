import * as fs from 'fs';
import { parseNestedObject } from './parseNestedObject';
import * as ini from 'ini';
import { envFile } from './envFile';

export async function getConfig(fileName: string): Promise<any> {
  try {
    const configPath = fileName;

    // Check if the file exists
    try {
      await fs.promises.access(configPath, fs.constants.F_OK);
    } catch {
      console.error(`${fileName} file not found`);
      return {};
    }

    // Read and parse the file
    try {
      const configFile = await fs.promises.readFile(configPath, 'utf-8');
      let config;

      if (configPath.includes('.env')) {
        config = envFile();
      } else if (configPath.includes('.ini')) {
        config = parseNestedObject(ini.parse(configFile))
      } else {
        config = parseNestedObject(JSON.parse(configFile));
      }

      return config;
    } catch (error) {
      console.error(`Error while reading ${fileName}`, error);
      return {}
    }
  } catch (error) {
    console.error(`Error while reading ${fileName}`, error);
    return {};
  }

}

