import { useRouter } from 'next/router';
import React from 'react';
interface ILogo {
  light?: boolean;
}
const Logo: React.FC<ILogo> = ({ light }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className={`flex items-center space-x-2 text-xl md:text-2xl font-bold cursor-pointer ${
        light ? 'text-brandwhite' : ''
      }`}
    >
      i
      <p>
        Trip<span className="text-blue-500 tracking-wider">Safari</span>
      </p>
    </div>
  );
};

export default Logo;
