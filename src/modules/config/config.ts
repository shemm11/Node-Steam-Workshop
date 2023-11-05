import * as path from 'path'

export const STEAM_CMD_PATH = 'V:/steamcmd/steamcmd'; // Full Path to SteamCMD

export const DOWNLOAD_PATH_STEAM = path.join(STEAM_CMD_PATH + '/../' + 'steamapps/workshop/content'); // Path to steamCMD workshop content
export const SAVE_PATH_MODS = path.join(__dirname + '../../../../downloads/'); // Path to save mods
export const MODS_ID_COLLECTION = path.join(__dirname + '/../../../' + 'mods.csv');