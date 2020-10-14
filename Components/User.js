import Layout from '../Components/Layout'

const User = ({user}) => {
    return(
        <Layout>
            <h2>Details :</h2>
            <div className="jumbotron">
                <h1 className="display-4">{user.name}</h1>
                <p className="lead">{user.username}</p>
                <hr className="my-4" />
                <h3>Address:</h3>
                <address>{user.address.city} | {user.address.street}</address>
                <h3>Phone:</h3>
                <address>{user.phone}</address> 
            </div>
        </Layout>
    )
}

  export default User
