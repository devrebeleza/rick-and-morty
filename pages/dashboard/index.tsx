import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { ContainerCharacters } from "../../containers/characters/ContainerCharacters";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { FooterPage } from "../../components/generals/FooterPage";
import { CharacterModel } from "../../models/character";
import {
  getLocalStorage,
  setUnsetElementLocalStorage,
} from "../../contexts/LocalStorageFunctions";

const Characters = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [listCharacters, setListCharacters] = useState(
    getLocalStorage("FavoritesCharacaters")
  );

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
    setUnsetElementLocalStorage("FavoritesCharacaters", character);
    setListCharacters(getLocalStorage("FavoritesCharacaters"));
  };

  /*             -------------               */
  return (
    <div className={styles.container}>
      <PersonalHead title="Dashboard" />
      <NavBar page="dashboard" />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Dashboard Page</h1>
        </div>
        {listCharacters.length == 0 ? `No Favorite Characters` : ""}
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
    </div>
  );
};

export default Characters;
