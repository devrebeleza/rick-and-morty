import { useContext, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { ContainerCharacters } from '../../containers/characters/ContainerCharacters';
import { PersonalHead } from '../../components/generals/Head';
import NavBar from '../../components/generals/Header';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../apollo/queries/characters';
import { FooterPage } from '../../components/generals/FooterPage';
import { SpinLoader } from '../../components/generals/SpinLoader';
import { SearchBar } from '../../components/generals/SearchBar';
import { CharacterModel } from '../../models/character';
import { Footer } from '../../components/generals/Footer';
import { ScrollUp } from '../../components/generals/ScrollUp';
import { CartContext } from '../../contexts/CartContext';

const Characters = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { loading, data } = useQuery(GET_CHARACTERS(numberPage, searchTerm));

  const {
    favouriteCharacters,
    getFavouriteCharacters,
    setUnsetElementFavouriteCharacters,
  } = useContext(CartContext);

  let listCharacters = [];
  let totalPages = 0;

  /*             -------------               */
  if (data) {
    let listStorageFavourites = [];
    if (favouriteCharacters) {
      listStorageFavourites = getFavouriteCharacters('FavoritesCharacaters');
    }
    //
    data.characters.results.forEach((element) => {
      const findElement = listStorageFavourites.find(
        (item) => item.id == element.id
      );
      const newCharacter = Object.assign(
        { selected: !findElement ? false : true },
        element
      );
      listCharacters.push(newCharacter);
    });
    //
    totalPages = data.characters.info.pages;
  }

  /*             -------------               */
  const handleSearchByName = (e) => {
    let filter = e.target.value;
    if (filter.length > 2 || filter.length === 0) {
      setNumberPage(1);
      setSearchTerm(filter);
    }
  };

  /*             -------------               */
  const setFavorites = (character: CharacterModel) => {
    character.selected = !character.selected;
    setUnsetElementFavouriteCharacters('FavoritesCharacaters', character);
  };

  /*             -------------               */
  return (
    <div className={styles.container}>
      <PersonalHead title='Characters' />
      <NavBar page='characters' />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Characters Page</h1>
          <SearchBar handleSearch={handleSearchByName} />
        </div>
        {loading ? <SpinLoader /> : ''}
        <ContainerCharacters
          list={listCharacters}
          setFavorites={setFavorites}
        />
      </main>
      <FooterPage
        totalPages={totalPages}
        numberPage={numberPage}
        setNumberPage={setNumberPage}
      />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Characters;
