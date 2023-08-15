import  TodoSearch  from './TodoSearch'
import { render, fireEvent } from '@testing-library/react';

describe('TodoSearch', () => {
  it('calls onSearch prop when input changes', () => {
    // Mock the onSearch function
    const mockOnSearch = jest.fn();

    // Render the TodoSearch component with the mockOnSearch function
    const { getByTestId } = render(<TodoSearch onSearch={mockOnSearch} />);
    const input = getByTestId('todo-search-input'); // Update with the actual data-testid of your input

    // Simulate a change event on the input
    fireEvent.change(input, { target: { value: 'search term' } });

    // Check if the onSearch function was called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith('search term');
  });
});