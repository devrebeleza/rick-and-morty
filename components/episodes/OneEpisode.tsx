import { EpisodesProps } from "../../models/props";
import { Card } from "../../styles/styles";
import styles from "../../styles/Home.module.css";

export const OneEpisode = (props: EpisodesProps) => {
  return (
    <Card className={styles.card}>
      <h1>{props.episode.name}</h1>
      <h3>Air Date: {props.episode.air_date}</h3>
      <h3>Code Episode: {props.episode.episode}</h3>
    </Card>
  );
};
