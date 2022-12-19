import { gql } from '@apollo/client';

export const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        status
        species
        origin {
          name
        }
        gender
        image
        location {
          name
        }
      }
    }
  }
`;