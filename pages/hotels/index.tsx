import React from 'react';
import MainLayout from '../../components/layout/main';
import { NextPageWithLayout } from '../page';

const Hotels: NextPageWithLayout = () => {
  return <div>Hotels</div>;
};

export default Hotels;

Hotels.getLayout = (page) => <MainLayout>{page}</MainLayout>;
