import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page: number, name: string) => {
  return gql`
  query {
    characters(page:${page},filter:{name:"${name}"}) {
      info {
        pages
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;
};

export const GET_CHARACTER = (id) => {
  return gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          id
          name
          type          
          dimension
          created
        }
        location {
          id
          name
          type
        }
        episode {
          id
          name
          air_date          
          episode
          created
        }
        created
      }
    }
  `;
};
