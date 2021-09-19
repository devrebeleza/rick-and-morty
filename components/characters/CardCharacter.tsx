import Image from "next/image";
import { Card } from "../../styles/styles";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { FavoriteCharacter } from "./FavoriteCharacter";
import { useState } from "react";
import { CharacterPropsFavorites } from "../../models/props";

export const CardCharacter = (props: CharacterPropsFavorites) => {
  const [characterSelected, setCharacterSelected] = useState(
    props.character.selected
  );
  const checkCharacter = () => {
    props.setFavorites(props.character);
    setCharacterSelected(!characterSelected);
  };
  return (
    <Card className={styles.card}>
      <Link href={`/characters/${props.character.id}`} passHref>
        <div>
          <h1>{props.character.name}</h1>
          <Image
            src={`${props.character.image}`}
            height={200}
            width={200}
            alt={`personaje ${props.character.name}`}
          />
          <p>{props.character.species}</p>
        </div>
      </Link>
      <FavoriteCharacter
        checkCharacter={checkCharacter}
        characterSelected={props.character.selected}
      />
    </Card>
  );
};
