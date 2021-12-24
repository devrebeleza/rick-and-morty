import { useEffect, useState } from 'react';
import { createContext } from 'react';

import {
  getLocalStorage,
  setUnsetElementLocalStorage,
} from './LocalStorageFunctions';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [favouriteCharacters, setFavouriteCharacters] = useState([]);

  const getFavouriteCharacters = (nameStorage) => {
    return getLocalStorage(nameStorage);
  };

  const setUnsetElementFavouriteCharacters = (nameStorage, character) => {
    setUnsetElementLocalStorage(nameStorage, character);
  };

  useEffect(() => {
    const localStorage = getLocalStorage('FavouritesCharacaters');
    if (localStorage) {
      setFavouriteCharacters(localStorage);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        favouriteCharacters,
        getFavouriteCharacters,
        setUnsetElementFavouriteCharacters,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
