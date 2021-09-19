import { EpisodesProps } from "../../models/props";
import { Card } from "../../styles/styles";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const CardEpisode = (props: EpisodesProps) => {
  return (
    <Link href={`/episodes/${props.episode.id}`} passHref>
      <Card className={styles.card}>
        <h1>{props.episode.name}</h1>
        <h3>Air Date: {props.episode.air_date}</h3>
        <h3>Code Episode: {props.episode.episode}</h3>
      </Card>
    </Link>
  );
};
