import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

/* TODO

Pagination Notes:

O Only display the first n items in the list, where n is the number to display per screen in your context.
  O If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
  O If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.

*/

const ListItems = (props) =>
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
            <div onClick={ () => props.toggleComplete(item.id) }>
              Complete: { item.complete.toString() }
            </div>
            <hr />
          </div>
        ))
      }
    </>
  )
}
export default ListItems;
