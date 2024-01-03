import * as path from 'path'
import { Workshop } from '../modules/workshop/workshop';
import { SteamSerivce } from '../modules/steam/steam';
import { FilesService } from '../modules/transport/files';
import { TransportService } from '../modules/transport/transport';
import { COLLECTION } from '../common/interfaces/workshop.interface';
import { convertCollectionToMod } from '../common/methods/convert';
import { MOD } from '../common/interfaces/files.interface';


async function bootstrap(): Promise<void> {
  const pathDownload = path.join(__dirname + '/../../');
  new TransportService().createDirectory(pathDownload, 'downloads');
  const collectionUrl = await new FilesService().parseTxt();
  const id: string = collectionUrl.split('/').pop().replace('?id=', '');
  // new TransportService().createDirectory(`${pathDownload}/downloads`, id);
  const collection: COLLECTION = await new Workshop().getModsFromCollection(id);
  const mods: MOD[] = convertCollectionToMod(collection);
  new SteamSerivce().spawnSteam(mods);
}

bootstrap();

