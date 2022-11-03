import styled, { css } from 'styled-components';

import { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

import ListItems from './ListItems';
import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton'

import { When } from 'react-if';


/* TODO

O Consume and utilize Context values throughout your components:
Show a maximum of a certain number of items per screen in the <List /> component.
  O Provide “next” and “previous” links to let the users navigate a long list of items.
  O Hide or show completed items in the list.
    X Optional: Sort the items based on any of the keys (i.e. difficulty).

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
        {/* if # of items in list is more than pagination threshold AND not at the end of the list */ }
        <When
          condition={ props.list.length > contextValues.pagination && props.currentIndex < (props.list.length - contextValues.pagination) }>
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
