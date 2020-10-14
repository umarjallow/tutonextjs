import Layout from "../Components/Layout";
import head from "next/head";
const Hello = (
  <>
    <head>
      <title>Hello-NextJS</title>
    </head>
    <Layout>
      <h1>Hello NextJS</h1>
      <p>Hello Guy'z Here is my fist tuto at Next JS</p>
    </Layout>
  </>
);

export default () => Hello;
