import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the footer resume CTA', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /resume pdf/i })).toBeInTheDocument();
});

test('renders the experience heading', () => {
  render(<App />);
  expect(screen.getByText(/^experience$/i)).toBeInTheDocument();
});

test('renders summary, deep skills, and education sections', () => {
  render(<App />);
  expect(screen.getByText(/^summary$/i)).toBeInTheDocument();
  expect(screen.getByText(/technical stack/i)).toBeInTheDocument();
  expect(screen.getByText(/education/i)).toBeInTheDocument();
  expect(screen.getByText(/real-time and data integration/i)).toBeInTheDocument();
  expect(screen.getByText(/enterprise data and security/i)).toBeInTheDocument();
  expect(screen.getByText(/testing and quality/i)).toBeInTheDocument();
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
  expect(screen.getByText(/\$5\.9m enterprise platform/i)).toBeInTheDocument();
  expect(screen.getByText(/healthcare \+ workflow automation/i)).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /download resume/i })).not.toBeInTheDocument();
});

test('renders experience, skills, and contact content', () => {
  render(<App />);
  expect(screen.getByText(/healthcare mobile app platform/i)).toBeInTheDocument();
  expect(screen.getByText(/backend and apis/i)).toBeInTheDocument();
  expect(screen.getAllByText(/python/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/tailwind css/i)).toBeInTheDocument();
  expect(screen.getAllByText(/server-sent events \(sse\)/i).length).toBeGreaterThan(1);
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
