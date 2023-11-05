import * as path from 'path'
import { SteamSerivce } from "./modules/steam/steam";
import { FilesService } from "./modules/transport/files";
import { TransportService } from "./modules/transport/transport";


async function bootstrap(): Promise<void> {
  const pathDownload = path.join(__dirname + '/../');
  new TransportService().createDirectory(pathDownload, 'downloads');
  const mods = await new FilesService().parseCSV();
  new SteamSerivce().spawnSteam(mods);
}

bootstrap();

