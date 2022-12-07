import Head from 'next/head';
import React from 'react';
import MainLayout from '../../components/layout/main';
import Featured from '../../components/sections/home/featured';
import Hero from '../../components/sections/home/hero';
import { NextPageWithLayout } from '../page';

const Deals: NextPageWithLayout = () => {
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
      {/* <Featured /> */}
    </>
  );
};

export default Deals;

Deals.getLayout = (page) => <MainLayout>{page}</MainLayout>;
