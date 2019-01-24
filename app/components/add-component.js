export default ({ addThingToOwner }) => (
  <>
    <h1>Add a Mermaid Tail for J Balvin</h1>
    <button onClick={() => {
      addThingToOwner({ variables: { description: 'Mermaid Tail', ownerId: 'person2' } });
    }}>Add the thing</button>
  </>
);