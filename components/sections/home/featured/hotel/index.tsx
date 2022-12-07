import { StarIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import { IHotel } from '../../../../../types';

interface IHotelComponent {
  hotel: IHotel;
}

const HotelComponent: React.FC<IHotelComponent> = ({ hotel }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl col-span-12 md:col-span-6 lg:col-span-3">
      <div className="relative h-56 w-full rounded-t-2xl overflow-hidden">
        <Image src={hotel.images} alt="city" fill className="object-cover" />
      </div>

      <div className="p-4 flex flex-col space-y-4">
        <h6 className="text-lg font-medium w-full">{hotel.title}</h6>

        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className="h-4 text-yellow-500" />
          ))}
        </div>

        <p className="flex items-center space-x-2">
          <span className="py-1 px-3 rounded-b-2xl rounded-tl-2xl bg-blue-500 text-white">
            4.4/5
          </span>
          <span className="hover:underline cursor-pointer text-blue-500 font-medium">
            245 reviews
          </span>
        </p>

        <div className="flex justify-end">
          <p className="text-lg">
            <span className="text-gray-500 pr-2">from</span>
            <span className="font-bold text-gray-700">KES {hotel.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
