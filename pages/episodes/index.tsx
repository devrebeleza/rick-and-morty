import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_EPISODES } from "../../apollo/queries/episodes";
import { ComponentEpisodes } from "../../components/episodes/ComponentEpisodes";
import { FooterPage } from "../../components/generals/FooterPage";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { SearchBar } from "../../components/generals/SearchBar";
import { SpinLoader } from "../../components/generals/SpinLoader";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/generals/Footer";

const Episodes = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, data } = useQuery(GET_EPISODES(numberPage, searchTerm));

  let listEpisodes = [];
  let totalPages = 0;
  if (data) {
    listEpisodes = [...data.episodes.results];
    totalPages = data.episodes.info.pages;
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
      <PersonalHead title="Episodes" />
      <NavBar page="episodes" />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Episodes Page</h1>
          <SearchBar handleSearch={handleSearchByName} />
        </div>
        {loading ? <SpinLoader /> : ""}
        <ComponentEpisodes list={listEpisodes} />
      </main>
      <FooterPage
        totalPages={totalPages}
        numberPage={numberPage}
        setNumberPage={setNumberPage}
      />
      <Footer />
    </div>
  );
};

export default Episodes;
