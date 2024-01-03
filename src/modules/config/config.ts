import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  private envPath = path.resolve(__dirname + '../../../../user/config.env');

  constructor() {
    this.envConfig = dotenv.parse(fs.readFileSync(this.envPath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}


export const STEAM_CMD_PATH = path.join(__dirname + '../../../../steamcmd/steamcmd');
export const DOWNLOAD_PATH_STEAM = path.join(STEAM_CMD_PATH + '/../' + 'steamapps/workshop/content'); // Path to steamCMD workshop content
export const SAVE_PATH_MODS = path.join(__dirname + '../../../../downloads/'); // Path to save mods
export const MODS_ID_COLLECTION = path.join(__dirname + '/../../../' + 'user/mods.csv');
export const WORKSHOP_COLLECTION = path.join(__dirname + '/../../../' + 'user/collections.txt');

