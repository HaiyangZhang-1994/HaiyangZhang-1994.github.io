import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the footer resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /resume pdf/i })).toBeInTheDocument();
});

test('renders the experience heading', () => {
  render(<App />);
  expect(screen.getByText(/selected experience/i)).toBeInTheDocument();
});

test('renders summary, deep skills, and education sections', () => {
  render(<App />);
  expect(screen.getByText(/professional summary/i)).toBeInTheDocument();
  expect(screen.getByText(/core technical stack/i)).toBeInTheDocument();
  expect(screen.getByText(/education/i)).toBeInTheDocument();
  expect(screen.getByText(/testing & quality/i)).toBeInTheDocument();
  expect(screen.getByText(/syracuse university/i)).toBeInTheDocument();
});

test('renders hero identity and signal strip', () => {
  render(<App />);
  expect(screen.getByText(/haiyang zhang/i)).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /haiyang zhang portrait/i })).toHaveAttribute(
    'src',
    '/avatar.jpg',
  );
  expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/next\.js \/ fastapi/i)).toBeInTheDocument();
  expect(screen.getByText(/cloud deployment/i)).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /download resume/i })).not.toBeInTheDocument();
});

test('renders experience, skills, and contact content', () => {
  render(<App />);
  expect(screen.getByText(/privacy computing platform modernization/i)).toBeInTheDocument();
  expect(screen.getByText(/backend & integration/i)).toBeInTheDocument();
  expect(screen.getAllByText(/google cloud platform/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
    'href',
    'mailto:oceanzhang1994@gmail.com',
  );
});

test('applies reveal animations across content sections', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('[data-reveal]').length).toBeGreaterThan(10);
});
