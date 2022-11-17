import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from '../../ui/logo';
import { navItems } from './data';
import MobileMenu from './mobile-menu';

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white p-4 shadow-md rounded-b-xl z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center">
          {navItems.map((item, index) => (
            <div className="mr-3" key={index}>
              <Link
                className={`${
                  router.asPath === item.link
                    ? 'text-blue-500'
                    : 'text-gray-800'
                } inline-block px-4 py-2 text-md font-medium no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800`}
                href={item.link}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <button className="hidden md:flex bg-slate-700 rounded-lg text-sm font-normal text-white py-2 text-center px-4 hover:bg-slate-50 shadow-md">
          SignUp / Register
        </button>

        {/* menu btn */}
        <div onClick={() => setShowMenu((prev) => !prev)} className="md:hidden">
          {showMenu ? (
            <XIcon className="h-6 cursor-pointer" />
          ) : (
            <MenuAlt3Icon className="h-6 cursor-pointer" />
          )}
        </div>

        {/* ============== MOBILE MENU =============== */}
        {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
      </div>
    </header>
  );
};

export default Navbar;
