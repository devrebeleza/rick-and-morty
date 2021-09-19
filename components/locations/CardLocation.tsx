import { LocationsProps } from "../../models/props";
import { Card } from "../../styles/styles";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const CardLocation = (props: LocationsProps) => {
  return (
    <Link href={`/places/${props.location.id}`} passHref>
      <Card className={styles.card}>
        <h1>{props.location.name}</h1>
        <h3>Dimension: {props.location.dimension}</h3>
        <h3>Type: {props.location.type}</h3>
      </Card>
    </Link>
  );
};
