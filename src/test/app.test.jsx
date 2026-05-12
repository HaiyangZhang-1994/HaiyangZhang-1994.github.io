import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the primary resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
});

test('renders the experience heading', () => {
  render(<App />);
  expect(screen.getByText(/selected experience/i)).toBeInTheDocument();
});

test('renders hero identity and signal strip', () => {
  render(<App />);
  expect(screen.getByText(/haiyang zhang/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /haiyang zhang portrait/i })).toHaveAttribute(
    'src',
    '/Haiyang-Website/avatar.jpg',
  );
  expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
});

test('renders experience, skills, and contact content', () => {
  render(<App />);
  expect(screen.getByText(/distributed privacy computing data service platform/i)).toBeInTheDocument();
  expect(screen.getByText(/performance & architecture/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    'mailto:oceanzhang1994@gmail.com',
  );
});

test('renders the animated system journey section', () => {
  render(<App />);
  expect(screen.getByText(/system journey/i)).toBeInTheDocument();
  expect(screen.getByText(/privacy compute/i)).toBeInTheDocument();
  expect(screen.getAllByText(/fhir records/i).length).toBeGreaterThan(0);
});
