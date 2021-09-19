import Image from "next/image";
import { CharacterProps } from "../../models/props";
import { Card } from "../../styles/styles";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

export const OneCharacter = (props: CharacterProps) => {
  const [characterSelected, setCharacterSelected] = useState(
    props.character.selected
  );

  return (
    <Link href={`/characters/${props.character.id}`} passHref>
      <Card className={styles.card}>
        <h1>{props.character.name}</h1>
        <Image
          src={`${props.character.image}`}
          height={200}
          width={200}
          alt={`personaje ${props.character.name}`}
        />
        <p>Specie: {props.character.species}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Status: {props.character.status}</p>
        {/* Add Favorite button https://codepen.io/mapk/pen/ZOQqaQ */}
      </Card>
    </Link>
  );
};
