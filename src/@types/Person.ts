type OriginType = {
  name: string;
}

type LocationPersonType = {
  name: string;
};

export interface PersonType {
  name: string;
  status: string;
  species: string;
  origin: OriginType;
  gender: string;
  image: string;
  location: LocationPersonType;
};

interface ResultType {
  results: PersonType[]
}

export interface CharactersType {
  characters: ResultType;
}