import React from 'react';
import { create } from 'react-test-renderer';

import App from '../App';


test("The app can exist", () => {
  const app = create(<App />)
  expect(app.toJSON()).toMatchSnapshot()
})
