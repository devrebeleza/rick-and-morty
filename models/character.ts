import { EpisodeModel } from "./episode";
import { LocationModel } from "./location";

export interface CharacterModel {
  id: string;
  name: String;
  species: String;
  image: String;
  status: String;
  gender: String;
  origin: LocationModel;
  location: LocationModel;
  episode: [EpisodeModel];
  created: String;
  selected?: boolean;
}
