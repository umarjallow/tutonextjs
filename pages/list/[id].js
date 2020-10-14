import User from "../../Components/User";


const Item = ({ user }) => {
  return <User user={user} />;
};


export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

export default Item;
