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
