import * as fs from 'fs'
import * as csv from 'csv-parser';
import logger from "../../common/logger/logger"
import { MODS_ID_COLLECTION } from "../config/config";
import { MOD } from '../../common/interfaces/files.interface';


export class FilesService {

  async parseCSV() {
    const results: MOD[] = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream(MODS_ID_COLLECTION)
        .pipe(csv())
        .on('data', (row) => {
          // Обработка каждой строки CSV
          results.push(row);
        })
        .on('end', () => {
          // Завершение чтения CSV
          resolve(results);
        })
        .on('error', (error) => {
          logger.error(`parseCSV ERROR ${error}`);
          reject(error);
        })
    });
    return results;
  }
}
