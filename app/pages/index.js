import DumbComponent from '../components/dumb-component';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { THINGS_QUERY } from '../data/queries/things.query';
import { GET_LOCAL_COUNTER } from '../data/queries/local-counter.query';


export default () => (
  <>
    <Query query={THINGS_QUERY}>
      {({ loading, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        const { things } = data;
        return <DumbComponent things={things} />;
      }}
    </Query>
    <Query query={GET_LOCAL_COUNTER}>
      {({ data }) => <h2>Local count: {data.count}</h2>}
    </Query>
    <Link href={'/mutation'}><a>Next Page</a></Link>
    <br />
    <Link href={'/local-state'}><a>Last Page</a></Link>
  </>
);
