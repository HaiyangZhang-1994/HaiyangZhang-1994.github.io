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
  expect(screen.getByText(/what i bring/i)).toBeInTheDocument();
  expect(screen.getByText(/selected proof/i)).toBeInTheDocument();
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
  expect(screen.getByText(/frontend-first engineer building react and react native products/i)).toBeInTheDocument();
  expect(screen.getByText(/^8$/i)).toBeInTheDocument();
  expect(screen.getAllByText(/years/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/100,000\+/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/\$5\.9m/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/react, react native, typescript, next\.js, node\.js, fastapi, postgresql/i)).toBeInTheDocument();
  expect(screen.getByText(/react product engineering/i)).toBeInTheDocument();
  expect(screen.getAllByText(/ai-powered healthcare/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/workflow platforms/i).length).toBeGreaterThan(0);
  expect(screen.queryByRole('link', { name: /download resume/i })).not.toBeInTheDocument();
});

test('renders experience, skills, and contact content', () => {
  render(<App />);
  expect(screen.getByText(/healthcare mobile app platform/i)).toBeInTheDocument();
  expect(screen.getByText(/workflow platform refactor/i)).toBeInTheDocument();
  expect(screen.getByText(/\$5\.9m enterprise platform across 123 scoped requirements and 107 implementation-complete items/i)).toBeInTheDocument();
  expect(screen.getByText(/raised frontend engineering standards across a 4-person frontend group/i)).toBeInTheDocument();
  expect(screen.getByText(/backend and apis/i)).toBeInTheDocument();
  expect(screen.getByText(/ai and llm applications/i)).toBeInTheDocument();
  expect(screen.getAllByText(/retrieval-augmented generation \(rag\)/i).length).toBeGreaterThan(0);
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
