import { CharacterModel } from "./character";
import { EpisodeModel } from "./episode";
import { LocationModel } from "./location";

export interface CharacterProps {
  character: CharacterModel;
}

export interface EpisodesProps {
  episode: EpisodeModel;
}

export interface LocationsProps {
  location: LocationModel;
}

export interface CharacterPropsFavorites {
  character: CharacterModel;
  setFavorites: (character: CharacterModel) => void;
}
