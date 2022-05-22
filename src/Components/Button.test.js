import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('Renders button', () => {
  render(<Button>Some text</Button>);

  const buttonText = screen.getByText('Some text');
  const btn = screen.getByRole('button');

  expect(buttonText).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(btn).toMatchSnapshot();
});
