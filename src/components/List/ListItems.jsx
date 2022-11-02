import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

const List = (props) =>
{
  const contextValues = useContext(SettingsContext);

  const paginate = () => {
    // list -> total items to display

    // return a sub-array of the main array -> from currentIndex (in state) PLUS the value of pagination(from context)
    return props.list.slice(props.currentIndex, props.currentIndex + contextValues.pagination);
  }

  return (
    <>
      {
        paginate().map(item => (
          <div key={ item.id }>
            <p>{ item.text }</p>
            <p><small>Assigned to: { item.assignee }</small></p>
            <p><small>Difficulty: { item.difficulty }</small></p>
            <div onClick={ () => props.toggleComplete(item.id) }>Complete: { item.complete.toString() }</div>
            <hr />
          </div>
        ))
      }
    </>
  )
}
export default List;
