import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_CHARACTER } from "../../apollo/queries/characters";
import { OneCharacter } from "../../components/characters/OneCharacter";
import { ComponentEpisodes } from "../../components/episodes/ComponentEpisodes";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { SpinLoader } from "../../components/generals/SpinLoader";
import { CardLocation } from "../../components/locations/CardLocation";
import styles from "../../styles/Home.module.css";
import { Back } from "../../styles/styles";
import { Footer } from "../../components/generals/Footer";
import { ScrollUp } from "../../components/generals/ScrollUp";

const ACharacter = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_CHARACTER(id));

  let listEpisodes = [];
  if (data) {
    listEpisodes = [...data.character.episode];
  }

  return (
    <>
      <PersonalHead title={id} />
      <NavBar page="character" />
      <main className={styles.main}>
        <Back onClick={() => router.back()}> ◀ Go Back</Back>
        <div className={styles.preTitle}>
          <h1>Character Page</h1>
        </div>
        {loading ? (
          <SpinLoader />
        ) : (
          <>
            <OneCharacter character={data.character} />
            <div>
              Origin Location:
              <CardLocation location={data.character.origin} />
              Actual Location:{" "}
              <CardLocation location={data.character.location} />
              Episodes ({listEpisodes.length}):
              <ComponentEpisodes list={listEpisodes} />
            </div>
          </>
        )}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ACharacter;
