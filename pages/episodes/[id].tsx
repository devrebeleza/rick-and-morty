import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_EPISODE } from "../../apollo/queries/episodes";
import { ComponentCharacters } from "../../components/characters/ComponentCharacters";
import { OneCharacter } from "../../components/characters/OneCharacter";
import { ComponentEpisodes } from "../../components/episodes/ComponentEpisodes";
import { OneEpisode } from "../../components/episodes/OneEpisode";
import { Footer } from "../../components/generals/Footer";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { ScrollUp } from "../../components/generals/ScrollUp";
import { SpinLoader } from "../../components/generals/SpinLoader";
import { CardLocation } from "../../components/locations/CardLocation";
import styles from "../../styles/Home.module.css";
import { Back } from "../../styles/styles";

const AEpisode = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_EPISODE(id));

  let listCharacters = [];
  if (data) {
    listCharacters = [...data.episode.characters];
  }

  return (
    <>
      <PersonalHead title={id} />
      <NavBar page="episode" />
      <main className={styles.main}>
        <Back onClick={() => router.back()}> ◀ Go Back</Back>
        <div className={styles.preTitle}>
          <h1>Episode Page</h1>
        </div>
        {loading ? (
          <SpinLoader />
        ) : (
          <>
            <OneEpisode episode={data.episode} />
            <div>
              Characters ({listCharacters.length}):
              <ComponentCharacters list={listCharacters} />
            </div>
          </>
        )}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default AEpisode;
