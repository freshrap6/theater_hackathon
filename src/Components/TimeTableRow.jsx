import React from 'react';

const TimeTableRow = ({ entry }) => {
  return (
    <tr><td>{entry.days}</td><td>{entry.times}</td></tr>
  );
};

export default TimeTableRow;