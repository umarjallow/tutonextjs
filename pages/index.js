import Layout from "../Components/Layout";
import head from "next/head";
import fetch from "isomorphic-unfetch";
import Prices from '../Components/Prices'

const Index = ({data}) => {
  return (
    <>
      <head>
        <title>Welcome</title>
      </head>
      <Layout>
        <h1>Welcome To my next Tuto</h1>
        <Prices bpi={data.bpi} />
      </Layout>
    </>
  )
};

 export async function getServerSideProps(context) {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    props: {
      data
    },
  };
};

export default Index;
