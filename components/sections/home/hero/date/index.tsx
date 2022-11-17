import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import getNights from '../../../../../utils/getNights';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme

interface IDateInput {
  dates: {
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    key?: string | undefined;
  }[];
  setDates: React.Dispatch<
    React.SetStateAction<
      {
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        key?: string | undefined;
      }[]
    >
  >;
  nights: number;
  setNights: React.Dispatch<React.SetStateAction<number>>;
}

const DateInput: React.FC<IDateInput> = ({
  nights,
  dates,
  setDates,
  setNights,
}) => {
  const [openDate, setOpenDate] = useState(false);

  useEffect(() => {
    const dif = getNights(dates[0].startDate, dates[0].endDate);
    setNights(dif);
    console.log(`${dif} nights`);
  }, [dates, setNights]);

  return (
    <>
      {/* checkin and out */}
      <div className="rounded-lg border h-24 cursor-pointer flex-grow p-4 flex justify-between items-center relative">
        <div onClick={() => setOpenDate((prev) => !prev)}>
          <p>Check-in</p>
          <p className="font-bold">
            {' '}
            {dates[0].startDate && format(dates[0].startDate, 'MM/dd/yyyy')}
          </p>
        </div>

        <p>{nights} nights</p>

        <div onClick={() => setOpenDate((prev) => !prev)}>
          <p>Check-out</p>
          <p className="font-bold">
            {dates[0].endDate && format(dates[0].endDate, 'MM/dd/yyyy')}
          </p>
        </div>

        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
            rangeColors={['#00f']}
            className="absolute -left-10 sm:left-0 top-[110%] shadow-lg bg-white z-20 rounded-lg"
          />
        )}
      </div>
    </>
  );
};

export default DateInput;
