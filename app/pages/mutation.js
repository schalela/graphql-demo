import AddComponent from '../components/add-component';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { ADD_THING_MUTATION } from '../data/mutations/add-thing.mutation';
import { THINGS_QUERY } from '../data/queries/things.query';

export default () => (
  <>
    <Mutation
      mutation={ADD_THING_MUTATION}
      update={(cache, { data: { addedThing } }) => {
        const { things } = cache.readQuery({ query: THINGS_QUERY });
        cache.writeQuery({
          query: THINGS_QUERY,
          data: { things: things.concat([addedThing]) },
        });
      }}>
      {(addThingToOwner) =>
        <AddComponent addThingToOwner={addThingToOwner} />
      }
    </Mutation>
    <br />
    <Link href={'/'}><a>Previous Page</a></Link>
  </>
);

