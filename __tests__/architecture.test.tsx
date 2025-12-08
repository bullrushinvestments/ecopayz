import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./apiService', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesignData = (data) => {
    return Promise.resolve(data);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Design Architecture component without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches design data on load and displays it correctly', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);
  });

  test('displays error message when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch';
    (await import('./apiService')).fetchDesignData.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/failed to fetch/i);
  });

  test('handles edge case where no data is returned', async () => {
    const mockData = null;
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no design available/i)).toBeInTheDocument();
  });

  test('tests accessibility features', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);

    // Check if the component is accessible
    const sampleDesignElement = screen.getByRole('heading', { name: /sample design/i });
    expect(sampleDesignElement).toBeVisible();
    expect(sampleDesignElement).toHaveAccessibleName(/sample design/i);
  });

  test('tests loading state', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Simulate data fetching
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, { id: '123', name: 'Sample Design' }));
    await screen.findByText(/sample design/i);
  });

  test('tests user interaction with the component', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);

    // Simulate user interaction
    const sampleDesignElement = screen.getByRole('button', { name: /view details/i });
    fireEvent.click(sampleDesignElement);
    expect(screen.getByText(/design details/i)).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

jest.mock('./apiService', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchDesignData = (data) => {
    return Promise.resolve(data);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Design Architecture component without crashing', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('fetches design data on load and displays it correctly', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);
  });

  test('displays error message when fetching data fails', async () => {
    const errorMessage = 'Failed to fetch';
    (await import('./apiService')).fetchDesignData.mockImplementation(() => Promise.reject(new Error(errorMessage)));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/failed to fetch/i);
  });

  test('handles edge case where no data is returned', async () => {
    const mockData = null;
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no design available/i)).toBeInTheDocument();
  });

  test('tests accessibility features', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);

    // Check if the component is accessible
    const sampleDesignElement = screen.getByRole('heading', { name: /sample design/i });
    expect(sampleDesignElement).toBeVisible();
    expect(sampleDesignElement).toHaveAccessibleName(/sample design/i);
  });

  test('tests loading state', async () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Simulate data fetching
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, { id: '123', name: 'Sample Design' }));
    await screen.findByText(/sample design/i);
  });

  test('tests user interaction with the component', async () => {
    const mockData = { id: '123', name: 'Sample Design' };
    (await import('./apiService')).fetchDesignData.mockImplementation(mockFetchDesignData.bind(null, mockData));

    render(<DesignArchitectureComponent />);
    await screen.findByText(/sample design/i);

    // Simulate user interaction
    const sampleDesignElement = screen.getByRole('button', { name: /view details/i });
    fireEvent.click(sampleDesignElement);
    expect(screen.getByText(/design details/i)).toBeInTheDocument();
  });

});