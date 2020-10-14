import Layout from "../../Components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
const Users = ({data}) => {
 
  return (
    <>
     <head>
      <title>List Users</title>
    </head>
    <Layout>
        <h1>List of users</h1>
        <ul className="list-group">
           {data.map(user => 
              <li className="list-group-item">
                  <Link href={encodeURIComponent(user.id)}>
                     <a>
                       {user.name}
                     </a>
                  </Link>
              </li>
           )}
        </ul>
        {data.map(user => {
            <h1>{user.name}</h1>
         })}
    </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
 const data = await res.json();
  return {
    props: {data},
  };
} 

export default Users;
