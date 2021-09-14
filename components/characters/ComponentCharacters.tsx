import { CardCharacter } from "./CardCharacter";
import styles from "../../styles/Home.module.css";

export const ComponentCharacters = ({ list }) => {
  return (
    <div className={styles.grid}>
      {list.map((element, index) => {
        return <CardCharacter key={index} character={element} />;
      })}
    </div>
  );
};
