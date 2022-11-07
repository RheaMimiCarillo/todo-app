import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Card, Button, Classes, Elevation } from '@blueprintjs/core';
import { When, If, Then, Else } from 'react-if';
import './List.scss'

/* TODO

Pagination Notes:

O Only display the first n items in the list, where n is the number to display per screen in your context.
  O If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
  O If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.

*/

const ListItems = (props) =>
{
  const contextValues = useContext(SettingsContext);

  const paginate = () =>
  {
    // list -> total items to display

    // return a sub-array of the main array -> from currentIndex (in state) PLUS the value of pagination(from context)
    console.log(props.list);
    return props.list.slice(props.currentIndex, props.currentIndex + contextValues.pagination);
  }

  function filterCompleted()
  {
    console.log('items before filtering complete: ', props.list);
    const incompleteItems = props.list.filter(item => !item.complete);
    console.log('incomplete items: ', incompleteItems);
    setList(incompleteItems);
  }

  return (
    <>
      <When condition={ !props.list.length }>
        <Card
          interactive={ false }
          elevation={ Elevation.TWO }
          className={ `bp4-dark ` }
        >
          <h5 className='bp4-skeleton'>Homework</h5>
          <p className='bp4-skeleton'>Felix</p>
          <p className='bp4-skeleton'>Difficulty: 4</p>
          <Button className='bp4-skeleton'>Completed</Button>
        </Card>
      </When>
      <If condition={ contextValues.showCompleted }>
        <Then>
          {
            paginate().map(item => (
              <Card
                key={ item.id }
                interactive={ true }
                elevation={ Elevation.TWO }
                className={ `bp4-dark ` }
              >
                <h5>{ item.text }</h5>
                <p>Assigned to: { item.assignee }</p>
                <p>Difficulty: { item.difficulty }</p>
                <Button onClick={ () => props.toggleComplete(item.id) }>
                  Complete: { item.complete.toString() }
                </Button>
                <hr />
              </Card>
            ))
          }
        </Then>
        <Else>
          {
            paginate().filter(item => !item.complete)
              .map(item => (
                <Card
                  key={ item.id }
                  interactive={ true }
                  elevation={ Elevation.TWO }
                  className={ `bp4-dark ` }
                >
                  <h5>{ item.text }</h5>
                  <p>Assigned to: { item.assignee }</p>
                  <p>Difficulty: { item.difficulty }</p>
                  <Button onClick={ () => props.toggleComplete(item.id) }>
                    Complete: { item.complete.toString() }
                  </Button>
                  <hr />
                </Card>
              ))
          }
        </Else>
      </If>
    </>
  )
}
export default ListItems;
