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

O Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  O If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  O If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.

*/

const List = (props) =>
{
  const contextValues = useContext(SettingsContext);
  return (
    <>
      <div className='list' data-testid="list">
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
        {/* TODO: in between previous and next button, show buttons for each "page" of items, so a user can click to jump to a numbered page */ }
        {/* if # of items in list is more than pagination threshold AND not at the end of the list */ }
        <When condition={ props.list.length > contextValues.pagination && props.currentIndex < (props.list.length - contextValues.pagination) }>
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
