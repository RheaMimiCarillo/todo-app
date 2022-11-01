import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';

/* Components */
import Header from '../Header/header';
import List from '../List/list';

/* Settings Context */
import { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../hooks/context/SettingsContext';

const ToDo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  // look at list[] in state
  // and look at pagination from context
  // create a subarray(.slice()) of list items we want to display for a certain page
  const paginate = () =>
  {
    // return a sub-array of the main array -> from currentIndex (in state) PLUS the value of pagination
  }

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <Header />

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <List
        list={list}
        toggleComplete={toggleComplete}
      />
    </>
  );
};

export default ToDo;
