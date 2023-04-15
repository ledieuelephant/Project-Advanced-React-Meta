import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';

test("renders the header with a Project and Contact Me Text", () => {
  render(<Header />);
  const projectText = screen.getByText(/Projects/i);
  const contactMeText = screen.getByText(/Contact Me/i);
  expect(projectText).toBeInTheDocument();
  expect(contactMeText).toBeInTheDocument();
});
