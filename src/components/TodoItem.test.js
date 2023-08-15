import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem'; // Make sure to provide the correct path to your component
import * as Api from '../api/todos';

// Mock the API functions used in the component
jest.mock('../api/todos', () => ({
  toggleTodo: jest.fn(),
  deleteTodo: jest.fn(),
}));

describe('TodoItem Component', () => {
  const todo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
  };

  it('renders todo item correctly', () => {
    const { getByTestId, getByText } = render(<TodoItem todo={todo} dispatch={jest.fn()} />);
    
    expect(getByText('Test Todo')).toBeInTheDocument();
    expect(getByTestId('todo-delete-1')).toBeInTheDocument();
  });
it('toggles todo completion', async () => {
  const dispatchMock = jest.fn();
  const { getByTestId } = render(<TodoItem todo={todo} dispatch={dispatchMock} />);
  
  // Click on the checkbox input element instead of 'todo-item'
  fireEvent.click(getByTestId('todo-item'));

  // Rest of your expectations and assertions
});


  it('deletes todo on delete icon click', async () => {
    const dispatchMock = jest.fn();
    const { getByTestId } = render(<TodoItem todo={todo} dispatch={dispatchMock} />);
    
    fireEvent.click(getByTestId('todo-delete-1'));

    // Simulate successful API call
    await Api.deleteTodo.mockResolvedValueOnce();

    expect(Api.deleteTodo).toHaveBeenCalledWith(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'DELETE_TODO',
      payload: 1,
    });
  });

  // You can add more test cases to cover other scenarios
});