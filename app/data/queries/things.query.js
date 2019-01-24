import gql from 'graphql-tag';

export const THINGS_QUERY = gql`
  query {
    things {
      id
      description
      owner {
        name
      }
    }
  }
`;