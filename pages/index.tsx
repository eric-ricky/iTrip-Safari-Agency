import Head from 'next/head';
import React from 'react';
import { NextPageWithLayout } from './page';
import MainLayout from '../components/layout/main';
import Hero from '../components/sections/home/hero';
import Featured from '../components/sections/home/featured';

const Home: NextPageWithLayout = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = 'http://localhost:3000/api/hotels';
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     console.log(data);
  //   };

  //   fetchData();
  // });

  return (
    <>
      <Head>
        <title>iTripSafari | Your Trip Starts Here</title>
        <meta
          name="description"
          content="iTripSafari - Your go-to travel buddy. Hotel Booking and more"
        />
      </Head>

      <Hero />
      <Featured />
    </>
  );
};

export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
