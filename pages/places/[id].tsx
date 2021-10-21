import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_LOCATION } from "../../apollo/queries/locations";
import { ComponentCharacters } from "../../components/characters/ComponentCharacters";
import { Footer } from "../../components/generals/Footer";
import { PersonalHead } from "../../components/generals/Head";
import NavBar from "../../components/generals/Header";
import { SpinLoader } from "../../components/generals/SpinLoader";
import { CardLocation } from "../../components/locations/CardLocation";
import styles from "../../styles/Home.module.css";
import { Back } from "../../styles/styles";

const AEpisode = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_LOCATION(id));

  let listResidents = [];
  if (data) {
    listResidents = [...data.location.residents];
  }

  return (
    <>
      <PersonalHead title={id} />
      <NavBar page="place" />
      <main className={styles.main}>
        <Back onClick={() => router.back()}> ◀ Go Back</Back>
        <div className={styles.preTitle}>
          <h1>Location Page</h1>
        </div>
        {loading ? (
          <SpinLoader />
        ) : (
          <>
            <CardLocation location={data.location} />
            <div>
              Residents ({listResidents.length}):
              <ComponentCharacters list={listResidents} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default AEpisode;
