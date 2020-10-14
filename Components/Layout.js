import Navbar from "../Components/Navbar";

const Layout = (props) => (
  <div>
    <head>
      <title>Hellow-NextJS</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </head>
    <Navbar />
   <div className="container">
   {props.children}
   </div>
  </div>
);

export default Layout;
