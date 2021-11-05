import { render, screen } from '@testing-library/react';
import App from './App';

import PopCulture from './Dashboard/pages/PopCulture';

test('renders learn react link', () => {
  render(<PopCulture/>);
  const linkElement = screen.getByText(/Plays/i);
  expect(linkElement).toBeInTheDocument();
});
