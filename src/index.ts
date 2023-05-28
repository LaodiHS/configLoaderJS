// Import any dependencies or modules you need
import { getConfig } from './commonmethods/getConfig';
import { envFile } from './commonmethods/envFile'
import { commandLineArguments } from './commonmethods/commandLineArguments';
import fs from 'fs'
// Access the configuration properties
// Define your public API and export the necessary functions or classes



export function loadConfig(): { [key: string]: any } {

  const env: { [key: string]: any } = envFile();

  return env;

}

export function getCommandLineArguments(): { [key: string]: any } | undefined[] {

  return commandLineArguments();

}

export async function parseConfig(fileLocations: string | string[]): Promise<any> {
  const fileArray = Array.isArray(fileLocations) ? fileLocations : [fileLocations];

  const parsed: any = {};

  await Promise.all(
    fileArray.map(async (fileLocation) => {
      try {
        await fs.promises.access(fileLocation, fs.constants.F_OK);
        parsed[fileLocation] = await getConfig(fileLocation);
      } catch (error) {
        console.error(`File ${fileLocation} does not exist.`);
      }
    })
  );

  return parsed;
}


