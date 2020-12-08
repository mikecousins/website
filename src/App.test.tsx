import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Mike Cousins/i);
  expect(titleElement).toBeInTheDocument();
});
