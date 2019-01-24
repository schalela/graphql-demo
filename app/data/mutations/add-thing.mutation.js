import gql from 'graphql-tag';

export const ADD_THING_MUTATION = gql`
  mutation AddThingToOwner($description: String! $ownerId: String!) {
    addedThing: addThingToOwner(description: $description ownerId: $ownerId) {
      id
      description
      owner {
        name
      }
    }
  }
`;