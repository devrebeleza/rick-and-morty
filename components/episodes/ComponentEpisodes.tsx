import styles from "../../styles/Home.module.css";
import { CardEpisode } from "./CardEpisode";

export const ComponentEpisodes = ({ list }) => {
  return (
    <div className={styles.grid}>
      {list.map((element, index) => {
        return <CardEpisode key={index} episode={element} />;
      })}
    </div>
  );
};
