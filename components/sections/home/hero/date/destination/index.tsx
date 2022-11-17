import React from 'react';
interface IDestinationInput {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
}
const DestinationInput: React.FC<IDestinationInput> = ({
  destination,
  setDestination,
}) => {
  return (
    <div className="rounded-lg border h-24 cursor-pointer flex-grow p-4 flex flex-col justify-center">
      <label htmlFor="destination">What is your travel destination?</label>
      <input
        type="text"
        name="destination"
        id="destination"
        placeholder="Nairobi"
        className="w-full border-none outline-none font-semibold"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
    </div>
  );
};

export default DestinationInput;
