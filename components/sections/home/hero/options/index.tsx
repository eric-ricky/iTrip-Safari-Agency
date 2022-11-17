import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { IOptions } from '..';
interface IOptionsInput {
  options: IOptions;
  setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
}

const OptionsInput: React.FC<IOptionsInput> = ({ options, setOptions }) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleOptions = (key: keyof IOptions, action: string) => {
    switch (action) {
      case 'add':
        setOptions((prev) => ({ ...prev, key: ++prev[key] }));
        break;
      case 'remove':
        key === 'children'
          ? setOptions((prev) =>
              prev[key] < 1 ? prev : { ...prev, key: --options[key] }
            )
          : setOptions((prev) =>
              prev[key] > 1 ? { ...prev, key: --prev[key] } : prev
            );
        break;
      default:
        break;
    }
  };

  return (
    <div className="rounded-lg border h-24 cursor-pointer flex-grow p-4 flex flex-col justify-center relative">
      <div onClick={() => setOpenOptions((prev) => !prev)}>
        <p>Rooms and Guests</p>
        <p className="font-bold">
          {`${options.room} Room${options.room > 1 ? 's' : ''} `},{' '}
          {`${options.adult} Adult${options.adult > 1 ? 's' : ''}`}
          {`${
            options.children
              ? `, ${options.children} ${
                  options.children > 1 ? 'children' : 'child'
                }`
              : ''
          }`}
        </p>
      </div>

      {openOptions && (
        <div className="absolute left-0 top-[110%] bg-slate-50 shadow-lg w-full rounded-lg p-4 flex flex-col space-y-4 font-medium">
          <div className="flex items-center justify-between">
            <p>Rooms</p>
            <div className="flex gap-2">
              <MinusCircleIcon
                onClick={() =>
                  handleOptions('room' as keyof IOptions, 'remove')
                }
                className="h-6 text-blue-500"
              />
              <p>{options.room}</p>
              <PlusCircleIcon
                onClick={() => handleOptions('room' as keyof IOptions, 'add')}
                className="h-6 text-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="flex flex-col">
              Adults <span className="text-xs font-normal">18+</span>
            </p>
            <div className="flex gap-2">
              <MinusCircleIcon
                onClick={() =>
                  handleOptions('adult' as keyof IOptions, 'remove')
                }
                className="h-6 text-blue-500"
              />
              <p>{options.adult}</p>
              <PlusCircleIcon
                aria-disabled={true}
                onClick={() => handleOptions('adult' as keyof IOptions, 'add')}
                className="h-6 text-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="flex flex-col font-medium">
              Children <span className="text-xs font-normal">0-17</span>
            </p>
            <div className="flex gap-2">
              <MinusCircleIcon
                onClick={() =>
                  handleOptions('children' as keyof IOptions, 'remove')
                }
                className="h-6 text-blue-500"
              />
              <p>{options.children}</p>
              <PlusCircleIcon
                onClick={() =>
                  handleOptions('children' as keyof IOptions, 'add')
                }
                className="h-6 text-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setOpenOptions(false)}
              className="bg-blue-500 text-white rounded-md py-2 px-6 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionsInput;
