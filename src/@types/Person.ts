export type OriginType = {
  name: string;
}

export type LocationPersonType = {
  name: string;
};

export type PersonType = {
  characters: {
    results: {
      id: number;
      name: string;
      status: string;
      species: string;
      origin: OriginType;
      gender: string;
      image: string;
      location: LocationPersonType;
    };
  };
};
