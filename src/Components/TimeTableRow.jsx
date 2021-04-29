import React from 'react';
import PropTypes from 'prop-types';
import TimeModel from './TimeModel'

const TimeTableRow = ({ entry }) => {
  return (
    <tr><td>{entry.day}</td><td>{entry.opening}</td><td>{entry.close}</td></tr>
  );
};

TimeTableRow.propTypes = {
  entry: PropTypes.instanceOf(TimeModel)
}

export default TimeTableRow;