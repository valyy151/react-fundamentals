export const UserGreeting = () => {
  const isLoggedIn = true;
  return (
    <div>
      <h1> Welcome {isLoggedIn && 'Vali'}</h1>
    </div>
  );
};
