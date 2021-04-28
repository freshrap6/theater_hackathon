import React from 'react';
import { create } from 'react-test-renderer';
import TimeTableRow from '../Components/TimeTableRow';

describe('Time table row test suite', () => {
  test('it will render correcty a time table entry', () => {
    const testEntry = { "days": "Monday", "times": "1400-2200" }
    const testRenderer = create(<TimeTableRow entry={testEntry} />)
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType(`td`)
    expect(cells[0].children).toContain("Monday");
  });
});