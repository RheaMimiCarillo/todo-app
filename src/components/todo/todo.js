import React, { useEffect, useState, useContext, useRef } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
/* Settings Context (note how this is imported with deconstruction) */
import { SettingsContext } from '../../context/SettingsContext';
/* Components */
import Header from '../Header/header';
import List from '../List/List';
import SnackBar from '../SnackBar/SnackBar.jsx';
import './Todo.scss';

const ToDo = () =>
{
  const [ defaultValues ] = useState({
    difficulty: 4,
  });
  const [ list, setList ] = useState([]);
  const [ incomplete, setIncomplete ] = useState([]);
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  const contextValues = useContext(SettingsContext);

  // useRef to clear input box onSubmit
  const taskNameRef = useRef(null);
  const assigneeRef = useRef(null);

  function addItem(item)
  {
    item.id = uuid();
    item.complete = false;
    //console.log('add item: ', item);
    taskNameRef.current.value = '';
    assigneeRef.current.value = '';
    setList([ ...list, item ]);
  }

  function deleteItem(id)
  {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id)
  {
    const items = list.map(item =>
    {
      if (item.id == id)
      {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() =>
  {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${ incomplete }`;
  }, [ list ]);


  // when show completed setting is changed, jump back to first page
  useEffect(()=>
  {
    setCurrentIndex(0);
  }, [contextValues.showCompleted])

  return (
    <>
      <SnackBar
        message={ 'sup' }
        isCloseButtonShown={ true }
        timeout={ 5000 }
        list={ list }
      />
      {/* <SettingsPage/> */ }
      <Header incomplete={ incomplete } />

      <form onSubmit={ handleSubmit }>
        <h2>Add To Do Item</h2>
        
        <label>
          <span>To Do Item</span>
          <input
            onChange={ handleChange }
            name="text"
            type="text"
            placeholder="Item Details"
            ref={ taskNameRef }
            data-testid="itemName"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={ handleChange }
            name="assignee"
            type="text"
            placeholder="Assignee Name"
            ref={ assigneeRef }
            data-testid="assignee"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={ handleChange }
            defaultValue={ defaultValues.difficulty }
            type="range"
            min={ 1 }
            max={ 5 }
            name="difficulty"
          />
        </label>

        <label>
          <button type="submit" data-testid="addItemButton">Add Item</button>
        </label>
      </form>

      <List
        list={ list }
        toggleComplete={ toggleComplete }
        currentIndex={ currentIndex }
        setCurrentIndex={ setCurrentIndex }
        deleteItem={ deleteItem }
      />
    </>
  );
};

export default ToDo;
