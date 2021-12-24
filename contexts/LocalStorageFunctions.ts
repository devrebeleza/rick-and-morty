import { CharacterModel } from '../models/character';

const removeItemFromArr = (arr, id) => {
  return arr.filter((e) => e.id !== id);
};

export const getLocalStorage = (nameStorage: string) => {
  let listStorageFavourite = [];
  const ISSERVER = typeof window === 'undefined';

  if (!ISSERVER) {
    if (localStorage.getItem(nameStorage)) {
      listStorageFavourite = [...JSON.parse(localStorage.getItem(nameStorage))];
    }
  }
  return listStorageFavourite;
};

export const setUnsetElementLocalStorage = (
  nameStorage: string,
  character: CharacterModel
) => {
  let listStorageFavourite = [];
  listStorageFavourite = getLocalStorage(nameStorage);

  if (character.selected) {
    listStorageFavourite.push(character);
  } else {
    listStorageFavourite = removeItemFromArr(
      listStorageFavourite,
      character.id
    );
  }
  //
  localStorage.removeItem(nameStorage);
  localStorage.setItem(nameStorage, JSON.stringify(listStorageFavourite));
};
