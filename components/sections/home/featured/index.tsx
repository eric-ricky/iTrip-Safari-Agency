import {
  CalendarIcon,
  CurrencyEuroIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';
import React from 'react';
import hotelsData from '../../../../mock-data';
import HotelComponent from './hotel';

const Featured = () => {
  return (
    <section className="-mt-[4%] rounded-t-3xl bg-white py-14 px-4 md:px-20">
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

          <div className="flex items-center space-x-4 mt-4 overflow-x-scroll lg:overflow-x-visible scrollbar-none scrollbar-thumb-gray-300 scrollbar-track-gray-50 pb-4">
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

        <div className="grid grid-cols-12 md:gap-10 gap-4">
          {hotelsData.map((hotel, i) => (
            <HotelComponent key={i} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
