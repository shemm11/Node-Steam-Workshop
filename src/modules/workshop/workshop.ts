import axios from 'axios';
import * as cheerio from 'cheerio';
import logger from '../../common/logger/logger';
import { ERROR_CODES } from '../../common/enum/codes.enum';
import { COLLECTION } from '../../common/interfaces/workshop.interface';


export class Workshop {


  async getModsFromCollection(id: string): Promise<COLLECTION> {
    logger.info('INIT getModsFromCollection');
    try {
      const response = await axios.get(`https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`);
      const html = response.data;
      const $ = cheerio.load(html);
      const mods: string[] = [];

      $('.collectionChildren .collectionItem .workshopItem a').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          mods.push(href);
        }
      });

      const firstBreadcrumb = $('.breadcrumbs a').first();
      const href = firstBreadcrumb.attr('href');
      let app: string;
      if (href) {
        const id = href.split('/').pop();
        app = id || null;
      } else {
        throw new Error(`${ERROR_CODES.COLLECTION_READ}: ${id}`);
      }

      return { mods, app};
    } catch (error) {
      logger.error(`${ERROR_CODES.COLLECTION_READ}: ${id} - ${error}`);
      throw new Error(`${ERROR_CODES.COLLECTION_READ}: ${id} - ${error}`);
    }
  }
}