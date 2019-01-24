export default ({ things }) => (
  <>
    <h1>List of things:</h1>
    <ul>
      {things.map(thing => <li key={thing.id}>Owner: {thing.owner.name}, Description: {thing.description}</li>)}
    </ul>
  </>
);
