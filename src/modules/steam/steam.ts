import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { STEAM_CMD_PATH } from '../config/config';
import { TransportService } from '../transport/transport';
import { MOD } from '../../common/interfaces/files.interface';
import logger from '../../common/logger/logger';

export class SteamSerivce {
  constructor(
    private transportSerice = new TransportService
  ) { }

  steam: ChildProcessWithoutNullStreams

  public spawnSteam(collection: MOD[]) {
    logger.info('INIT spawnSteam');
    collection = collection.map(value => {
      value.modId = value.modId.replace(/\D/g, '');
      return value;
    });
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

  exitSteam(code: any, collection: MOD[]) {
    logger.info(`SteamCMD has finished working with the code - ${code}`);
    this.transportSerice.prepareToCopy(collection);
  }
}
