import gql from 'graphql-tag';

export const GET_LOCAL_COUNTER = gql`
  query {
    count @client
  }
`;