// calculate the number of nights from startDate and endDate
const getNights = (startDate: Date | undefined, endDate: Date | undefined) =>
  endDate && startDate && +endDate - +startDate
    ? (+endDate - +startDate) / 86400000
    : 1;

export default getNights;
