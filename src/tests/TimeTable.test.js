import React from 'react';
import { create } from 'react-test-renderer';
import TimeTable from '../Components/TimeTable';
import sampleTimes from './sampleTimeTable.json';

describe('Time table test suite', () => {
  test('it will render the correct number of table entries', () => {
    //const sampleTimesLength = sampleTimes.length;
    
    const testRenderer = create(<TimeTable data={{ times: sampleTimes }} />);
    const testInstance = testRenderer.root;
    const tableBody = testInstance.findByType(`tbody`);

    expect(tableBody.children.length).toEqual(3);
  });
});