import logger from "../../common/logger/logger"
import * as fs from 'fs'
import * as path from 'path'
import { DOWNLOAD_PATH_STEAM, SAVE_PATH_MODS } from "../config/config";
import { ERROR_CODES, INFO_CODES } from "../../common/enum/codes.enum";
import { MOD } from "../../common/interfaces/files.interface";

export class TransportService {
  // constructor() { }

  prepareToCopy(collection: MOD[]) {
    logger.info(`INIT prepareToCopy`);

    collection.forEach(mod => {
      mod.modId = mod.modId.replace('\r', '');
      const destinationFile = path.join(SAVE_PATH_MODS);
      const sourceFile = path.join(DOWNLOAD_PATH_STEAM + `/${mod.appId}/${mod.modId}`);

      this.createDirectory(destinationFile, mod.modId);
      this.copySteamMod(sourceFile, destinationFile + mod.modId)
    });
  }

  copySteamMod(from: string, to: string): void {
    try {
      logger.info(`${INFO_CODES.COPY_STEAM_MOD} - FROM ${from} - TO ${to}`);
      fs.cpSync(from, to, { recursive: true });
    } catch (error) {
      logger.error(`${ERROR_CODES.COPY_STEAM_MOD}: ${JSON.stringify(error)}`);
    }
  }

  createDirectory(path: string, name: string) {
    logger.info(`INIT createDirectory - ${path} - ${name}`);
    fs.mkdir(path + name, { recursive: true }, (error) => {
      if (error) {
        logger.error(`${ERROR_CODES.CREATE_DIRECTORY}: ${JSON.stringify(error)}`);
      } else {
        logger.info(`${INFO_CODES.CREATE_DIRECTORY}: ${path}/${name}`);
      }
    });
  }
}
