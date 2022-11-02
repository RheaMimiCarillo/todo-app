import styled, { css } from 'styled-components';

import { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

/* TODO

> Pagination Notes:

X Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  X If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  X If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.

*/

const List = (props) =>
{

  return (
    <>
      {
        props.list.map(item => (
          <div key={ item.id }>
            <p>{ item.text }</p>
            <p><small>Assigned to: { item.assignee }</small></p>
            <p><small>Difficulty: { item.difficulty }</small></p>
            <div onClick={ () => props.toggleComplete(item.id) }>Complete: { item.complete.toString() }</div>
            <hr />
          </div>
        ))
      }

      <div className='listItems'>Hi from ListItems!
        <p>{ console.log(props) }</p>
      </div>
    </>
  )
}
export default List;
