import { useContext, useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { ContainerCharacters } from '../../containers/characters/ContainerCharacters';
import { PersonalHead } from '../../components/generals/Head';
import NavBar from '../../components/generals/Header';
import { FooterPage } from '../../components/generals/FooterPage';
import { CharacterModel } from '../../models/character';
import { Footer } from '../../components/generals/Footer';
import { ScrollUp } from '../../components/generals/ScrollUp';
import { CartContext } from '../../contexts/CartContext';

const Characters = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {
    favouriteCharacters,
    getFavouriteCharacters,
    setUnsetElementFavouriteCharacters,
  } = useContext(CartContext);

  const [listCharacters, setListCharacters] = useState([
    ...favouriteCharacters,
  ]);

  let totalPages = 1;

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
    setListCharacters(getFavouriteCharacters('FavoritesCharacaters'));
  };

  /*             -------------               */
  useEffect(() => {
    const favorite = getFavouriteCharacters('FavoritesCharacaters');
    if (favorite) {
      setListCharacters(favorite);
    }
  }, []);
  /*             -------------               */
  return (
    <div className={styles.container}>
      <PersonalHead title='Dashboard' />
      <NavBar page='dashboard' />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Dashboard Page</h1>
        </div>
        {listCharacters.length == 0 ? `No Favorite Characters` : ''}
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
