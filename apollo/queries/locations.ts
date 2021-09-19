import { gql } from "@apollo/client";

export const GET_LOCATIONS = (page: number, name: string) => {
  return gql`
  query {
    locations(page:${page},filter:{name:"${name}"}) {
      info {
        pages
      }
      results {
        id
        name        
        type
        dimension
        created  
      }
    }
  }
`;
};

export const GET_LOCATION = (id) => {
  return gql`
  query {
    location(id: ${id}) {
      id
      name
      type
      dimension
      created
    residents {
        id
        name
        species
        image
      }
    }
  }
  `;
};
