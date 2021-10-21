import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_LOCATIONS } from "../../apollo/queries/locations";
import { ComponentLocations } from "../../components/locations/ComponentLocations";
import { FooterPage } from "../../components/generals/FooterPage";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { SearchBar } from "../../components/generals/SearchBar";
import { SpinLoader } from "../../components/generals/SpinLoader";
import styles from "../../styles/Home.module.css";
import { Footer } from "../../components/generals/Footer";
import { ScrollUp } from "../../components/generals/ScrollUp";

const Places = () => {
  const [numberPage, setNumberPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { loading, data } = useQuery(GET_LOCATIONS(numberPage, searchTerm));

  let listLocations = [];
  let totalPages = 0;
  if (data) {
    listLocations = [...data.locations.results];
    totalPages = data.locations.info.pages;
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
      <PersonalHead title="Places" />
      <NavBar page="places" />
      <main className={styles.main}>
        <div className={styles.preTitle}>
          <h1>Welcome to Locations Page</h1>
          <SearchBar handleSearch={handleSearchByName} />
        </div>
        {loading ? <SpinLoader /> : ""}
        <ComponentLocations list={listLocations} />
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

export default Places;
