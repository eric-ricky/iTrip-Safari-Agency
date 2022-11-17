import React, { ReactNode } from 'react';
import Navbar from '../../navigation/navbar';
import Footer from '../../navigation/footer';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
