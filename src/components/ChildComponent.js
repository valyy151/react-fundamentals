export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('Vali')}>Greet Parent</button>
    </div>
  );
};
