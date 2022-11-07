import './SettingsPage.scss';
import '@blueprintjs/core/lib/css/blueprint.css';
import
{
  FormGroup,
  InputGroup,
  Switch,
  Button,
  Classes,
  Drawer,
  DrawerSize,
  HTMLSelect,
} from "@blueprintjs/core";
import { useState } from 'react';

import { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

/* TODO
X Provide the users with a form where they can change the values for those settings
    X This should be given in the form of a new component, perhaps linked to from the main navigation
    - Hint: Use Browser Router to create the page/route/component for this

  X Save the users choices in Local Storage
    X Retrieve their preferences from Local Storage and apply them to the application on startup
*/

function SettingsPage(props)
{
  const contextValues = useContext(SettingsContext);
  const handleClose = () => props.setIsOpen(false);

  return (
    <>
      <Drawer
        isOpen={ props.isOpen }
        onClose={ handleClose }
        icon="cog"
        title="Settings"
        className={ `Classes.MINIMAL bp4-dark ${ props.isOpen ? 'drawerOpen' : 'drawerClosed' }` }
        size={DrawerSize.SMALL}
      >
        <div className={ Classes.DRAWER_BODY }>
          <FormGroup
            //helperText={ "Helper text with details..." }
            label='Display Settings'
            onSubmit={ contextValues.updateSettings }
            id='updateSettings'
          >
            <Switch
              label="Show Completed Tasks"
              disabled={ false }
              onChange={ contextValues.updateShowCompleted }
              defaultChecked={ contextValues.showCompleted }
            />

            <HTMLSelect
              id='paginationSelect'
              onChange={ contextValues.updatePagination }
            >
              <option defaultValue>Tasks Per Page...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </HTMLSelect>

            <HTMLSelect
              id='paginationSelect'
              onChange={ contextValues.updatePagination }
              disabled={true}
            >
              <option defaultValue>Sort items by...</option>
              <option value="abc">ABC ↑</option>
              <option value="zyx">ABC ↓</option>
              <option value="hardest">Hard → Easy</option>
              <option value="easiest">Easy ← Hard</option>
              <option value="assignee">assignee</option>

            </HTMLSelect>
          </FormGroup>

        </div>
        <div className={ Classes.DRAWER_FOOTER }>
          <Switch label="Win the Lottery?" disabled={ true } />
          <Button
            form='updateSettings'
            type='submit'
            onClick={contextValues.updateLocalStorage}
          >
            Save Settings
          </Button>
        </div>
      </Drawer>
    </>
  )

}

export default SettingsPage;
