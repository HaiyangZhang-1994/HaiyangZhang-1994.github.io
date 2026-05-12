import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});
