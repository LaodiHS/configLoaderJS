
import { parseConfig } from '../src/index';
import * as fs from 'fs';

jest.mock('fs');

describe('parseConfig', () => {
  it('should parse INI file correctly', async () => {
    const configFile = 'config.ini';

    // Mock the fs.promises.access method to always resolve successfully
    jest.spyOn(fs.promises, 'access').mockResolvedValue(undefined);

    // Mock the fs.promises.readFile method to return mock INI file content
    const mockIniContent = `
      [SECTION]
      key1 = value1
      key2 = value2
    `;
    (fs.promises.readFile as jest.Mock).mockResolvedValue(mockIniContent);

    const parsedConfig = await parseConfig([configFile]);

    expect(parsedConfig).toEqual({
      'config.ini': {
        SECTION: {
          key1: 'value1',
          key2: 'value2',
        },
      },
    });

    expect(fs.promises.access).toHaveBeenCalledWith(configFile, fs.constants.F_OK);
    expect(fs.promises.readFile).toHaveBeenCalledWith(configFile, 'utf8');
  });
});