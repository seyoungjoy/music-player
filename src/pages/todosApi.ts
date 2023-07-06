import axios from 'axios';

const todosApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export type Todos = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export const getTodos = async (): Promise<Todos[]> => {
  const response = await todosApi.get('/todos');
  return response.data;
};

export const addTodo = async (todo: Todos) => {
  return await todosApi.post('/todos', todo);
};

export const updateTodo = async (todo: Todos) => {
  throw new Error('oh');
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async ({ id }: Pick<Todos, 'id'>) => {
  return await todosApi.delete(`/todos/${id}`);
};

export default todosApi;
