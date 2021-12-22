import React from 'react';
import { render } from 'setup/tests/index';
import WaterBar from '.';

describe('Typography', () => {
  test('component renders correctly', () => {
    const { getByTestId } = render(<WaterBar />);
    const element = getByTestId('waterBar');

    expect(element).toBeTruthy();
  });
});
