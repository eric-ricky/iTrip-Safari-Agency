import Head from 'next/head';
import React from 'react';
import MainLayout from '../../components/layout/main';
import { NextPageWithLayout } from '../page';

const Hotels: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Browse Hotels | iTripSafari | Your Trip Starts Here</title>
        <meta
          name="description"
          content="iTripSafari - Brose hotels today for your next amazing trip on iTripSafari"
        />
      </Head>

      <section className="py-14">
        <div className="container mx-auto">
          <h2 className="text-headingsm">Browse Hotels</h2>
        </div>
      </section>
    </>
  );
};

export default Hotels;

Hotels.getLayout = (page) => <MainLayout>{page}</MainLayout>;
