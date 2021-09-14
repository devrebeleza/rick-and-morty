import styles from "../../styles/Home.module.css";
import { CardLocation } from "./CardLocation";

export const ComponentLocations = ({ list }) => {
  return (
    <div className={styles.grid}>
      {list.map((element, index) => {
        return <CardLocation key={index} location={element} />;
      })}
    </div>
  );
};
