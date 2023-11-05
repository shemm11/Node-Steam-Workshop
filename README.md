# Node Steam Workshop

## Description

Node Steam Workshop is a service designed to download mods from Steam. This service provides a simple and convenient way to obtain and manage mods for your favorite games on the Steam platform.

## Installation

To install the service, follow these steps:
1. Install Node.js version 20. You can download it from this link: https://nodejs.org/en
2. Install SteamCMD. You can find it here: https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD
3. Clone the repository using the `git clone` command. Navigate to the project directory using the `cd` command.
   1. or download this repository.
4. Install all necessary dependencies using the `npm ci` command Or execute `nsw_ci.bat` file

## Usage

After installation, you can use the service to download mods from Steam.

Specify the data for downloading the mods you need.
1. open the file `src/modules/config/config.ts` using Notepad or Notepad++.
  1. DOWNLOAD_PATH_STEAM - Specify the full path where you installed SteamCMD.
2. Your second task is to fill in the `mods.csv` file. This file is a list of applications and mods.
    1. For each application, you need to specify its ID, which you can find on the SteamDB website. Visit the SteamDB page - https://steamdb.info/search/?a=all&q=Rimworld, find your application and copy its ID.
    2. For each mod, you need to specify its ID, which can be found on the Steam Workshop page. Go to the Steam Workshop page - https://steamcommunity.com/sharedfiles/filedetails/?id=818773962, copy the data after ?id= in the address bar and paste it into the mods.csv file, following the example.
3. Run the `Node-Steam-Workshop` application via the `npm run start` command line or run the `nsw_run.bat` file.
   1.  On the command line you will be informed that the download is complete. 
4. In the `downloads` folder you will find the downloaded files.

Translated with www.DeepL.com/Translator (free version)

## Support

If you encounter any problems or have questions related to using this service, create a new ticket in the `Issues` section of our GitLab repository.
It is desirable to attach log files in case of errors.

## License

`Node Steam Workshop` is distributed under the MIT license. Detailed information can be found in the LICENSE file.