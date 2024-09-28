import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message', () => {
  render(<Greeting name="Sofía" />);

  const greetingElement = screen.getByText(/hello, sofía!/i);
  expect(greetingElement).toBeInTheDocument();
});