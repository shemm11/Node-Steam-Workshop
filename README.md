# Node Steam Workshop

## Description

Node Steam Workshop is a service designed to download mods from Steam. This service provides a simple and convenient way to obtain and manage mods for your favorite games on the Steam platform.

## Installation

To install the service, follow these steps:
1. Install Node.js version 20. You can download it from this link: `https://nodejs.org/en`
2. Download the repository via Github on the releases page, then navigate to the folder of the downloaded repository - Link `https://github.com/shemm11/Node-Steam-Workshop/releases`
  1. or clone the repository using the `git clone` command. Navigate to the project directory using the `cd` command.
3. Install all necessary dependencies using the `npm ci` command Or execute `nsw_ci.bat` file

## Usage

After installation, you can use the service to download mods from Steam.

After installation you can use the service to download mods from Steam.
1. Your next task is to populate the `user/mods.csv` file. You can open this file using an Excel program or a text editor such as Notepad. The mods.csv file is a list of applications and mods. For each application, you need to specify its ID, which you can find on the SteamDB website. Visit the SteamDB page at `https://steamdb.info/search/?a=all&q=Rimworld`, find the application you want and copy its ID. 
2. For each mod, provide its URL, which can be found on the Steam Workshop page. Go to the Steam Workshop page at `https://steamcommunity.com/workshop/` and locate the desired mod. Copy the mod's URL from the address bar and paste it into the mods.csv file, following the example.
3. To run the `Node-Steam-Workshop` application, perform the following steps:
  1. open the Command Prompt.
  2. Navigate to the project folder.
  3. Run the npm run start command or run the `nsw_run.bat` file.
4. On the command line, you will see information about the completion of the download process.
5. In the downloads folder

## Download mods from the collection

1. Paste your collection URL into the `user/collection.tx` file, replacing the previous URL. You can open this file with Notepad++ or any text editor. Save your changes and close the file. 
2. After inserting the collection URL, run the `user/nfw_collection.bat` file or run the `npm run start:collection` command.
3. On the command line, you will see information about the completion of the download process.
4. In the downloads folder, you will find the downloaded files that match your instructions.

## Support

If you encounter any problems or have questions related to using this service, create a new ticket in the `Issues` section of our Github repository.
It is desirable to attach log files in case of errors.

## License

`Node Steam Workshop` is distributed under the MIT license. Detailed information can be found in the LICENSE file.