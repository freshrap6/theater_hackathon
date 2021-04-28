import React from 'react';

const TimeTable = () => {
  const times = [
    { days: 'Monday - Thursday', times: '1630-2100' },
    { days: 'Friday - Saturday', times: '1630-2200' },
    { days: 'Sunday', times: '1630-2100' }
  ];
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
          <tr><td>Monday</td><td>10-200</td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
        </tbody>
      </table>
    </div>
  );

};

export default TimeTable;