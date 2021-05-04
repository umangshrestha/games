import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('Test react renders default message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Click to start/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test react renders refresh button', () => {
  render(<App />);
  const linkElement = screen.getByText(/refresh/i);
  expect(linkElement).toBeInTheDocument();
});

