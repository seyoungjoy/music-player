import React, { FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { addTodo, deleteTodo, getTodos, Todos, updateTodo } from './todosApi';

const TodoList = () => {
  const queryClient = useQueryClient();
  const [newTodo, setNewTodo] = useState('');
  // Read
  const {
    isLoading,
    isError,
    data: todos,
    error,
  } = useQuery('todos', getTodos, {
    refetchOnWindowFocus: false,
    retry: 0,
    select: (data) => data.sort((a, b) => Number(b.id) - Number(a.id)),
  });

  //Create
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  //Update
  const updateTodoMutation = useMutation(updateTodo, {
    onError: (error, variable, context) => {
      console.log(error, variable, context);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  //Delete
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const renderContents = () => {
    if (isLoading) return <div>...loading</div>;
    else if (isError) return <div>서비스에 접속할 수 없습니다.</div>;
    else {
      return todos?.map((todo) => (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button
            className="trash"
            onClick={() => deleteTodoMutation.mutate({ id: todo.id })}
          >
            삭제
          </button>
        </article>
      ));
    }
  };

  const handleTodoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoMutation.mutate({
      id: '3958492',
      userId: 10000,
      title: newTodo,
      completed: false,
    });
    setNewTodo('');
  };
  return (
    <main>
      <h1>Todo List</h1>
      <form onSubmit={handleTodoSubmit}>
        <label htmlFor="new-todo">Enter a new todo item</label>
        <div className="new-todo">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
          />
        </div>
        <button className="submit">제출</button>
      </form>
      {renderContents()}
    </main>
  );
};

export default TodoList;
