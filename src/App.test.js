import { render, screen } from '@testing-library/react';
import App from './App';

test('todo', () => {
  render(<App />);
  const textElement = screen.getByText(/AddOn/i);
  expect(textElement).toBeInTheDocument();
});
