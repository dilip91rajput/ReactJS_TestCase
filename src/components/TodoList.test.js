import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended DOM assertions
import TodoList from './TodoList';
import { getAllTodos } from '../api/todos'; // Assuming you have the correct path to the API

jest.mock('../api/todos'); // Mocking the API call

describe('TodoList Component', () => {
 it('renders list of todos', async () => {
  const todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
  ];
  getAllTodos.mockResolvedValue({ data: todos });

  const { getByTestId, queryByText } = render(
    <TodoList dispatch={() => {}} todos={todos} query="" /> // Pass 'todos' here
  );

  await waitFor(() => {
    const todoList = getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();

    todos.forEach(todo => {
      expect(queryByText(todo.title)).toBeInTheDocument();
    });
  });
});

  // Add more test cases as needed
});