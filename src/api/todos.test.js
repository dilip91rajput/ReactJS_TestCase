import axios from 'axios'
import { getAllTodos, addTodo, deleteTodo, toggleTodo } from './todos'


jest.mock('axios'); // Mock axios to control its behavior

it('should fetch todos from API', async () => {
  const mockTodos = [{ id: 1, text: 'Test todo', completed: false }];
  axios.get.mockResolvedValue({ data: mockTodos });

  const result = await getAllTodos();

  expect(result.data).toEqual(mockTodos);
});


it('should add a todo using POST request', async () => {
  const newTodo = { id: 2, text: 'New test todo', completed: false };
  axios.post.mockResolvedValue({ data: newTodo });

  const result = await addTodo(newTodo);

  expect(result.data).toEqual(newTodo);
});

it('should delete a todo using DELETE request', async () => {
  const todoId = 1;
  axios.delete.mockResolvedValue({ status: 204 });

  const result = await deleteTodo(todoId);

  expect(result.status).toEqual(204);
});

it('should toggle a todo using PUT request', async () => {
  const todoId = 1;
  const updatedTodo = { id: 1, text: 'Test todo', completed: true };
  axios.put.mockResolvedValue({ data: updatedTodo });

  const result = await toggleTodo({ id: todoId, completed: true });

  expect(result.data).toEqual(updatedTodo);
});
