import styled, { css } from 'styled-components';

import { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

import ListItems from './ListItems';
import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton'

import { When } from 'react-if';


/* TODO

> Pagination Notes:

X Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  X If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  X If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.

*/

const List = (props) =>
{
  const contextValues = useContext(SettingsContext);
  return (
    <>
      <div className='list'>Hi from List!
        <ListItems
          list={ props.list }
          toggleComplete={ props.toggleComplete }
          currentIndex={ props.currentIndex }
        />
        {/* if current index 0, don't show */ }
        <When condition={ !(props.currentIndex === 0) }>
          <PreviousButton
            currentIndex={ props.currentIndex }
            setCurrentIndex={ props.setCurrentIndex }
          />
        </When>
        {/* if current index is > list.length - pagination &&
        list.length > context.pagination

        if the length of the list is greater than the number of items to display at once

        and the current index is greater than the length of the array minus pagination (array.length - pagination)

        */ }
        <p>{ console.log('props current index: ', props.currentIndex) }</p>
        <p>{ console.log('context pagination: ', contextValues.pagination) }</p>
        <p>{ console.log('props.list.length - contextValues.pagination: ', props.list.length - contextValues.pagination) }</p>
        <When condition={ props.list.length > contextValues.pagination }>
          <NextButton
            currentIndex={ props.currentIndex }
            setCurrentIndex={ props.setCurrentIndex }
          />
        </When>
      </div>
    </>
  )
}
export default List;
