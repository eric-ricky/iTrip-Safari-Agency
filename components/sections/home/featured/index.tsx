import {
  CalendarIcon,
  CurrencyEuroIcon,
  OfficeBuildingIcon,
  StarIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import hotelsData from '../../../../mock-data';

const Featured = () => {
  return (
    <section className="-mt-[4%] rounded-t-3xl bg-white py-14 px-6 md:px-20">
      <div className="container mx-auto bg-orange-50 rounded-2xl py-8 px-4 md:px-24">
        <div className="flex flex-col mb-8 ">
          <h2 className="text-3xl font-semibold">Featured Properties</h2>

          <div className="hidden md:flex items-center space-x-4 mt-4 font-medium">
            <div
              className="
            flex items-center space-x-2"
            >
              <CalendarIcon className="h-4 text-orange-500" />
              <span>Booking Guarantee</span>
            </div>

            <div
              className="
            flex items-center space-x-2"
            >
              <OfficeBuildingIcon className="h-4 text-orange-500" />
              <span>Stay Guarantee</span>
            </div>

            <div
              className="
            flex items-center space-x-2"
            >
              <CurrencyEuroIcon className="h-4 text-orange-500" />
              <span>Rewards for booking</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4 overflow-x-scroll lg:overflow-x-visible scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 pb-4">
            {[
              'Singapore',
              'Belgium',
              'Tokyo',
              'London',
              'Bulgardesh',
              'Dubai',
            ].map((city, i) => (
              <button
                key={i}
                className={`${
                  i === 0
                    ? 'bg-slate-700 text-white'
                    : 'bg-white text-slate-700'
                } rounded-md text-sm font-normal py-2 text-center px-4 hover:bg-slate-50 shadow-xl`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center flex-wrap justify-center gap-10">
          {hotelsData.map((hotel, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl md:w-[15.8625rem] lg:w-[19rem]"
            >
              <div className="relative h-56 w-full rounded-t-2xl overflow-hidden">
                <Image
                  src={hotel.images}
                  alt="city"
                  layout="fill"
                  objectFit="cover"
                />
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
                    <span className="font-bold text-gray-700">
                      KES {hotel.price}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
