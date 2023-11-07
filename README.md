# Node Steam Workshop

## Description

Node Steam Workshop is a service designed to download mods from Steam. This service provides a simple and convenient way to obtain and manage mods for your favorite games on the Steam platform.

## Installation

To install the service, follow these steps:
1. Install Node.js version 20. You can download it from this link: `https://nodejs.org/en`
2. Install SteamCMD. You can find it here: `https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD`
3. Download the repository via Github on the releases page, then navigate to the folder of the downloaded repository - Link `https://github.com/shemm11/Node-Steam-Workshop/releases`
  1. or clone the repository using the `git clone` command. Navigate to the project directory using the `cd` command.
4. Install all necessary dependencies using the `npm ci` command Or execute `nsw_ci.bat` file

## Usage

After installation, you can use the service to download mods from Steam.

After installation you can use the service to download mods from Steam.
1. open the `user` folder and find the `config.env` file. You can edit it with Notepad++ program or any text editor. In the `config.env` file, specify the path to the installed SteamCMD using the STEAM_CMD_PATH variable, as indicated in the example.
2. Your next task is to populate the `user/mods.csv` file. You can open this file using an Excel program or a text editor such as Notepad. The mods.csv file is a list of applications and mods. For each application, you need to specify its ID, which you can find on the SteamDB website. Visit the SteamDB page at `https://steamdb.info/search/?a=all&q=Rimworld`, find the application you want and copy its ID. 
3. For each mod, provide its URL, which can be found on the Steam Workshop page. Go to the Steam Workshop page at `https://steamcommunity.com/workshop/` and locate the desired mod. Copy the mod's URL from the address bar and paste it into the mods.csv file, following the example.
4. To run the `Node-Steam-Workshop` application, perform the following steps:
  1. open the Command Prompt.
  2. Navigate to the project folder.
  3. Run the npm run start command or run the `nsw_run.bat` file.
5. On the command line, you will see information about the completion of the download process.
6. In the downloads folder

## Support

If you encounter any problems or have questions related to using this service, create a new ticket in the `Issues` section of our Github repository.
It is desirable to attach log files in case of errors.

## License

`Node Steam Workshop` is distributed under the MIT license. Detailed information can be found in the LICENSE file.