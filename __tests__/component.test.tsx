import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data after loading completes', async () => {
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.queryByText(/loading/i).not.toBeInTheDocument());

    expect(screen.getByText(/value1/i)).toBeInTheDocument();
    expect(screen.getByText(/value2/i)).toBeInTheDocument();
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(/error: failed to fetch/i));
  });

  test('allows user interaction with buttons and inputs', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    fireEvent.change(screen.getByLabelText(/search/i), { target: { value: 'test' } });
    
    expect(fetchData).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();

    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveFocus();
  });

  test('validates form inputs before submission', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      key1: 'value1',
      key2: 'value2'
    }
  })
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state when fetching data', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data after loading completes', async () => {
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.queryByText(/loading/i).not.toBeInTheDocument());

    expect(screen.getByText(/value1/i)).toBeInTheDocument();
    expect(screen.getByText(/value2/i)).toBeInTheDocument();
  });

  test('handles error when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(/error: failed to fetch/i));
  });

  test('allows user interaction with buttons and inputs', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    fireEvent.change(screen.getByLabelText(/search/i), { target: { value: 'test' } });
    
    expect(fetchData).toHaveBeenCalled();
  });

  test('ensures accessibility features are implemented correctly', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();

    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveFocus();
  });

  test('validates form inputs before submission', () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
  });
});