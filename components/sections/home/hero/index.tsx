import React, { useState } from 'react';
import {
  ShieldCheckIcon,
  LightningBoltIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import DateInput from './date';
import DestinationInput from './date/destination';
import OptionsInput from './options';

interface IHero {}

export interface IOptions {
  room: number;
  adult: number;
  children: number;
}

const Hero: React.FC<IHero> = () => {
  const [destination, setDestination] = useState('');
  const [nights, setNights] = useState(1);
  const [dates, setDates] = useState<
    { startDate?: Date; endDate?: Date; key?: string }[]
  >([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState<IOptions>({
    room: 1,
    adult: 2,
    children: 0,
  });

  const handleSearch = () => {
    const payload = { destination, nights, dates, options };
    console.log(payload);
  };

  return (
    <section className="bg-blue-500 pt-10">
      <div className="container mx-auto min-h-[55vh] flex flex-col space-y-10 py-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-white">
            Your Trip Starts Here
          </h2>
          <div className="flex items-center gap-2 text-slate-100 font-medium text-base">
            <p className="flex items-center space-x-1">
              <ShieldCheckIcon className="h-5 text-green-200" />
              <span>Secure Payment</span>
            </p>

            <p>|</p>

            <p className="flex items-center space-x-1">
              <LightningBoltIcon className="h-5 text-yellow-500" />
              <span>Support in approx. 30s</span>
            </p>
          </div>
        </div>

        <div className="w-[85%] mx-auto bg-white rounded-lg flex flex-col lg:flex-row lg:items-center gap-4 p-6">
          {/* destination */}
          <DestinationInput
            destination={destination}
            setDestination={setDestination}
          />

          {/* checkin and out */}
          <DateInput
            dates={dates}
            nights={nights}
            setDates={setDates}
            setNights={setNights}
          />

          {/* options */}
          <OptionsInput options={options} setOptions={setOptions} />

          {/* btn */}
          <button
            className="rounded-lg border h-24 cursor-pointer py-4 px-12 text-center flex items-center justify-center bg-blue-500 shadow-lg text-white text-lg font-semibold"
            onClick={handleSearch}
          >
            {/* <ViewfinderCircleIcon className="h-6" /> */}
            <SearchIcon className="h-6 mr-2" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
