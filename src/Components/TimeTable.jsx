import React from 'react';
import TimeTableRow from './TimeTableRow';
import PropTypes from 'prop-types';

const TimeTable = ({ data }) => {
  const tableData = data.times.map((currEntry) => {
    return <TimeTableRow entry={currEntry} key={currEntry._id} />
  });
  return (
    <div className="row">
      <h3>Theater Opening Times</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Day(s)</td>
            <td>Times</td>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );

};

TimeTable.propTypes = {
  data: PropTypes.exact({
    times: PropTypes.arrayOf(
      PropTypes.exact({
        days: PropTypes.string,
        times: PropTypes.string,
        _id: PropTypes.number
      })
    )
  })
}

export default TimeTable;