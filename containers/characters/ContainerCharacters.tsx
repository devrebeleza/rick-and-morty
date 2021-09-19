import { CardCharacter } from "../../components/characters/CardCharacter";
import styles from "../../styles/Home.module.css";

export const ContainerCharacters = ({ list, setFavorites }) => {
  return (
    <div className={styles.grid}>
      {list.map((element, index) => {
        return (
          <CardCharacter
            key={index}
            character={element}
            setFavorites={setFavorites}
          />
        );
      })}
    </div>
  );
};
