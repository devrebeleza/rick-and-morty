import { CharacterModel } from '../models/character';

const removeItemFromArr = (arr, id) => {
  return arr.filter((e) => e.id !== id);
};

export const getLocalStorage = (nameStorage: string) => {
  let listStorageFavorite = [];
  const ISSERVER = typeof window === 'undefined';

  if (!ISSERVER) {
    if (localStorage.getItem(nameStorage)) {
      listStorageFavorite = [...JSON.parse(localStorage.getItem(nameStorage))];
    }
  }
  return listStorageFavorite;
};

export const setUnsetElementLocalStorage = (
  nameStorage: string,
  character: CharacterModel
) => {
  let listStorageFavorite = [];
  listStorageFavorite = getLocalStorage(nameStorage);

  if (character.selected) {
    listStorageFavorite.push(character);
  } else {
    listStorageFavorite = removeItemFromArr(listStorageFavorite, character.id);
  }
  //
  localStorage.removeItem(nameStorage);
  localStorage.setItem(nameStorage, JSON.stringify(listStorageFavorite));
};
