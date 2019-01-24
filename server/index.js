const { ApolloServer, gql } = require('apollo-server');
const uuid = require('uuid/v1');

const things = [
  {
    id: 'thing1',
    description: 'An old smelly sock',
    ownerId: 'person1',
  },
  {
    id: 'thing2',
    description: 'The philosopher\'s stone',
    ownerId: 'person1',
  },
  {
    id: 'thing3',
    description: 'A chicken burrito',
    ownerId: 'person2',
  }
];

const people = [
  {
    id: 'person1',
    name: 'Tony Montana'
  },
  {
    id: 'person2',
    name: 'J Balvin'
  }
]

const typeDefs = gql`
  type Thing {
    id: String
    description: String
    owner: Owner
  }

  type Owner {
    id: String
    name: String
    things: [Thing]
  }

  type Query {
    things: [Thing]
    thing(id: String!): Thing
    owners: [Owner]
  }

  type Mutation {
    addThingToOwner(description: String! ownerId: String!): Thing
  }
`;

const resolvers = {
  Thing: {
    owner: ({ ownerId }) => people.find(person => person.id === ownerId)
  },
  Owner: {
    things: ({ id }) => things.filter(thing => thing.ownerId === id)
  },
  Query: {
    things: () => things,
    thing: (parent, args, context, info) => things.find(thing => thing.id === args.id),
    owners: () => people
  },
  Mutation: {
    addThingToOwner: (parent, args, context, info) => {
      const id = uuid();
      things.push({ id, description: args.description, ownerId: args.ownerId });
      return things.find(thing => thing.id === id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});