import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { ComponentCharacters } from "../../components/characters/ComponentCharacters";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../apollo/queries/characters";
import { FooterPage } from "../../components/generals/FooterPage";
import { SpinLoader } from "../../components/generals/SpinLoader";
import { SearchBar } from "../../components/generals/SearchBar";

const Characters = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, data } = useQuery(GET_CHARACTERS(numberPage, searchTerm));

  let listCharacters = [];
  let totalPages = 0;
  if (data) {
    listCharacters = [...data.characters.results];
    totalPages = data.characters.info.pages;
  }

  const handleSearchByName = (e) => {
    let filter = e.target.value;
    if (filter.length > 2 || filter.length === 0) {
      setNumberPage(1);
      setSearchTerm(filter);
    }
  };

  return (
    <div className={styles.container}>
      <PersonalHead title="Characters" />
      <NavBar page="characters" />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Characters Page</h1>
          <SearchBar handleSearch={handleSearchByName} />
        </div>
        {loading ? <SpinLoader /> : ""}
        <ComponentCharacters list={listCharacters} />
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
