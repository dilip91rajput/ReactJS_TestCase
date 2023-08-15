import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodo from './AddTodo';

import { addTodo } from '../api/todos'; 



// Mock the addTodo function
jest.mock('../api/todos', () => ({
  addTodo: jest.fn(async (payload) => {
    return { data: { id: 1, ...payload } };
  }),
}));

describe('AddTodo Component', () => {
  it('renders the form and handles submission', async () => {
    const dispatchMock = jest.fn();

    render(<AddTodo dispatch={dispatchMock} />);

    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const submitButton = screen.getByText('Submit');

    userEvent.type(titleInput, 'Sample Title');
    userEvent.type(descriptionInput, 'Sample Description');
    userEvent.click(submitButton);

    await waitFor(() => {
       expect(addTodo).toHaveBeenCalledWith({
        title: 'Sample Title',
        description: 'Sample Description',
        completed: false,
      });
    
    });
  });

  it('displays error message when title and description are empty', async () => {
    const dispatchMock = jest.fn();

    render(<AddTodo dispatch={dispatchMock} />);

    const submitButton = screen.getByText('Submit');
    userEvent.click(submitButton);

    const invalidTitle = screen.getByTestId('invalid-title');
    const invalidDescription = screen.getByTestId('invalid-description');

    expect(invalidTitle).toBeInTheDocument();
    expect(invalidDescription).toBeInTheDocument();
  });
});