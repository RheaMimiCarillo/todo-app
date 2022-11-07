import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Card, Button, Classes, Elevation, Popover, Position, H5, Intent } from '@blueprintjs/core';
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
    return props.list.slice(props.currentIndex, props.currentIndex + contextValues.pagination);
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
                <Popover
                  position="auto"
                >
                  <Button icon='trash' />
                  <div className="confirmationBox">
                    <H5>Confirm deletion</H5>
                    <p>Are you sure you want to delete this item? You won't be able to recover it.</p>
                    <div style={ { display: "flex", justifyContent: "flex-end", marginTop: 15 } }>
                      <Button className={ Classes.POPOVER_DISMISS } style={ { marginRight: 10 } }>
                        Cancel
                      </Button>
                      <Button
                        intent={ Intent.DANGER }
                        className={ Classes.POPOVER_DISMISS }
                        onClick={ () => props.deleteItem(item.id) }
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Popover>
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
