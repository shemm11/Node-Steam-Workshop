import { MOD } from "../interfaces/files.interface";
import { COLLECTION } from "../interfaces/workshop.interface";

export function convertCollectionToMod(collection: COLLECTION): MOD[] {
  const mods: MOD[] = [];

  collection.mods.forEach((modId) => {
    const mod: MOD = {
      appId: collection.app,
      modId: modId,
    };

    mods.push(mod);
  });

  return mods;
}