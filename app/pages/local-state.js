import { Query } from 'react-apollo';
import Link from 'next/link';
import { GET_LOCAL_COUNTER } from '../data/queries/local-counter.query';

export default () => (
  <>
    <Query query={GET_LOCAL_COUNTER}>
      {({ data, client }) => (
        <>
          <button
            onClick={() => client.writeData({ data: { count: data.count++ } })}
          >Update local state</button>
          <h2>Local count: {data.count}</h2>
        </>
      )}
    </Query>
    <Link href={'/'}><a>First Page</a></Link>
  </>
);