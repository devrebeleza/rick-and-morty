import { gql } from "@apollo/client";

export const GET_EPISODES = (page: number, name: string) => {
  return gql`
  query {
    episodes(page:${page},filter:{name:"${name}"}) {
      info {
        pages
      }
      results {
        id
        name
        air_date
        episode
        created 
      }
    }
  }
`;
};

export const GET_EPISODE = (id) => {
  return gql`
    query {
      episode(id: ${id}) {
        id
        name
        air_date
        episode
        created
        characters {
          id
          name
          species
          image
        }
      }
    }
  `;
};
