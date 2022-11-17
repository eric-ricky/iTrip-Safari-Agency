import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { navItems } from './data';

interface IMobileMenu {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu: React.FC<IMobileMenu> = ({ setShowMenu }) => {
  const router = useRouter();

  return (
    <div className="fixed top-[7%] md:hidden rounded-b-lg left-0 w-full bg-white px-4 py-16 flex justify-center min-h-[100vh]">
      <nav className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          {navItems.map((item, index) => (
            <div className="mr-3" key={index}>
              <Link
                onClick={() => setShowMenu(false)}
                className={`${
                  router.asPath === item.link
                    ? 'text-blue-500'
                    : 'text-gray-800'
                } inline-block px-4 py-2 text-lg font-medium no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800`}
                href={item.link}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 mt-12">
          <button className="w-full bg-blue-500 rounded-md text-sm font-normal text-white py-2 text-center px-4 hover:bg-slate-50 shadow-md">
            Reserve Hotels
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
