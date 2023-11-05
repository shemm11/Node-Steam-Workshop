import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { STEAM_CMD_PATH } from '../config/config';
import { TransportService } from '../transport/transport';
import logger from '../../common/logger/logger';
import { MODS } from '../../common/interfaces/files.interface';

export class SteamSerivce {
  constructor(
    private transportSerice = new TransportService
  ) { }

  steam: ChildProcessWithoutNullStreams

  public spawnSteam(collection: MODS[]) {
    logger.info('INIT spawnSteam');
    const steamCmdArgs = ['+login anonymous'];
    collection.forEach(mod => steamCmdArgs.push(`+workshop_download_item ${mod.appId} ${mod.modId}`));
    steamCmdArgs.push('+quit');

    this.steam = spawn(STEAM_CMD_PATH, steamCmdArgs);

    this.steam.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    this.steam.on('close', (code) => {
      this.exitSteam(code, collection);
    });
  }

  exitSteam(code: any, collection: MODS[]) {
    logger.info(`SteamCMD has finished working with the code - ${code}`);
    this.transportSerice.prepareToCopy(collection);
  }
}
