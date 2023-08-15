import {todoReducer } from './todoReducer'

it('should handle SET_TODOS action', () => {
  const initialState = { todos: [] };
  const action = { type: 'SET_TODOS', payload: [{ id: 1, text: 'Test todo', completed: false }] };
  const newState = todoReducer(initialState, action);
  expect(newState.todos).toEqual(action.payload);
});

it('should handle ADD_TODO action', () => {
  const initialState = { todos: [] };
  const newTodo = { id: 1, text: 'Test todo', completed: false };
  const action = { type: 'ADD_TODO', payload: newTodo };
  const newState = todoReducer(initialState, action);
  expect(newState.todos).toContainEqual(newTodo);
});


it('should handle COMPLETE_TODO action', () => {
  const initialState = { todos: [{ id: 1, text: 'Test todo', completed: false }] };
  const action = { type: 'COMPLETE_TODO', payload: { id: 1 } };
  const newState = todoReducer(initialState, action);
  expect(newState.todos[0].completed).toBe(true);
});


it('should handle COMPLETE_TODO_ERROR action', () => {
  const initialState = { todos: [{ id: 1, text: 'Test todo', completed: true }] };
  const action = { type: 'COMPLETE_TODO_ERROR', payload: { id: 1 } };
  const newState = todoReducer(initialState, action);
  expect(newState.todos[0].completed).toBe(false);
});



it('should handle DELETE_TODO action', () => {
  const initialState = { todos: [{ id: 1, text: 'Test todo', completed: false }] };
  const action = { type: 'DELETE_TODO', payload: 1 };
  const newState = todoReducer(initialState, action);
  expect(newState.todos).toHaveLength(0);
});