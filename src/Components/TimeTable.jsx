import React, { useState, useEffect } from 'react';
import TimeTableRow from './TimeTableRow';
import PropTypes from 'prop-types';
import TimeModel from './TimeModel'

const TimeTable = ({ data }) => {
  // const tableData = data.times.map((currEntry) => {
  //   return <TimeTableRow entry={currEntry} key={currEntry._id} />
  // });

  const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });
  useEffect(() => {
    if (data?.error) {
        setDataStatus({ name: `error`, message: data.error });
    }
    else if (data?.openingtimes) {
        const ds = data.openingtimes.length > 0 ? { name: `data`, message: null } : { name: `nodata`, message: `There was no data previously saved` };
        setDataStatus(ds);
    }
    else {
        setDataStatus({ name: `loading`, message: `Data is loading...` });
    }
}, [data]);
  const populateTable = () => {
    if (data?.times?.length > 0) {
        return data.times.map(currentTime => {
            const { id,_id,day,opening,close} = currentTime
            const timem = new TimeModel(id,_id,day,opening,close)
            return <TimeTableRow entry={timem} key={timem._id}/>;
        });
    }

    return (
        <tr><td id={dataStatus.name} colSpan="3">{dataStatus.message}</td></tr>
    );
}

  return (
    <div className="row">
      <h3>Theater Opening Times</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Day(s)</td>
            <td>Time Open</td>
            <td>Time Close</td>
          </tr>
        </thead>
        <tbody>
          {populateTable()}
        </tbody>
      </table>
    </div>
  );

};

TimeTable.propTypes = {
  data: PropTypes.exact({
    times: PropTypes.arrayOf(
      PropTypes.exact({
        day: PropTypes.string,
        opening: PropTypes.string,
        close: PropTypes.string,
        _id: PropTypes.string,
        id: PropTypes.number
      })
    )
  })
}

export default TimeTable;