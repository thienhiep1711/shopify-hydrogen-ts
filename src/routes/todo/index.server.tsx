import { Fragment } from 'react';
import {
  TodoList,
  TodoForm,
  TodoItem
} from '~/components';
import { Layout } from '~/components/index.server';


export default function TodoApp () {
  return (
    <Layout>
      <div className="px-12 py-8 mx-auto">
        <Todo />
      </div>
    </Layout>
  )
}

function Todo () {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
      <TodoItem />
    </Fragment>
  )
}