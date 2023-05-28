import { handleError } from "./handleError";

export function parseConfig(parsed: { [key: string]: string }): { [key: string]: any } {

  const convertedConfig: { [key: string]: any } = {};

  for (const key in parsed) {

    const value = parsed[key];

    try {
      // Attempt to parse number
      if (!isNaN(Number(value))) {

        convertedConfig[key] = Number(value);

      }

      // Attempt to parse boolean
      else if (value.toLocaleLowerCase() === 'true' || value.toLocaleLowerCase() === 'false') {
        convertedConfig[key] = value.toLocaleLowerCase() === 'true';

      }

      // Default to string if not recognized
      else {
        convertedConfig[key] = value;

      }

    } catch (error: unknown) {
      handleError(error);
    }
  }
  return convertedConfig



}
