import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  it('should display loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    await waitFor(() => screen.getByText(/Loading.../i));
  });

  it('should display fetched data when available', async () => {
    const mockData = { name: 'John Doe', age: 30 };
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: mockData });
    await waitFor(() => screen.getByText(/John Doe/i));
  });

  it('should display error message when fetching fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    await waitFor(() => screen.getByText(/Failed to fetch data/i));
  });

  it('should handle user interaction with input fields and buttons', () => {
    fireEvent.change(screen.getByLabelText(/search/i), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  });

  it('should be accessible according to WCAG guidelines', async () => {
    await waitFor(() => expect(document.body).toHaveAttribute('role'));
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  it('should display loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'loading' });
    await waitFor(() => screen.getByText(/Loading.../i));
  });

  it('should display fetched data when available', async () => {
    const mockData = { name: 'John Doe', age: 30 };
    (fetchData as jest.Mock).mockResolvedValueOnce({ status: 'success', data: mockData });
    await waitFor(() => screen.getByText(/John Doe/i));
  });

  it('should display error message when fetching fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
    await waitFor(() => screen.getByText(/Failed to fetch data/i));
  });

  it('should handle user interaction with input fields and buttons', () => {
    fireEvent.change(screen.getByLabelText(/search/i), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  });

  it('should be accessible according to WCAG guidelines', async () => {
    await waitFor(() => expect(document.body).toHaveAttribute('role'));
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });
});