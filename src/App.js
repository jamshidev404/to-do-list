import InputToDo from './components/InputToDo';
import './App.css';
import { Fragment } from 'react';
import ListToDo from './components/ListToDo';

function App() {
  return (
    <Fragment>
      <div class="container">

      <InputToDo />
      <ListToDo />
      </div>
    </Fragment>
  );
}

export default App;
