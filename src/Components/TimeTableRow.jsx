import React from 'react';
import PropTypes from 'prop-types';

const TimeTableRow = ({ entry }) => {
  return (
    <tr><td>{entry.days}</td><td>{entry.times}</td></tr>
  );
};

TimeTableRow.propTypes = {
  entry: PropTypes.exact({
    days: PropTypes.string,
    times: PropTypes.string,
    _id: PropTypes.number
  })
}

export default TimeTableRow;