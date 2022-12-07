import React, { ReactNode } from 'react';
import Navbar from '../../navigation/navbar';
import Footer from '../../navigation/footer';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="flex flex-col body">
      <Navbar />

      <main className="flex-grow bg-slate-50 mb-auto">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
