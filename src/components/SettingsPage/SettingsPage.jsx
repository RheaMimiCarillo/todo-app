import './SettingsPage.scss';
import '@blueprintjs/core/lib/css/blueprint.css';
import
{
  FormGroup,
  InputGroup,
  Intent,
  Switch,
  Button,
  Classes,
  Divider,
  Drawer,
  Elevation,
  DrawerSize,
  HTMLSelect,
  Label,
  Menu,
  MenuItem,
  OptionProps,
  Position,
  Overlay,
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
        icon="info-sign"
        title="Settings"
        className={ `Classes.MINIMAL bp4-dark ${ props.isOpen ? 'drawerOpen' : 'drawerClosed' }` }
        elevation={ Elevation.ONE }
      >
        <div className={ Classes.DRAWER_BODY }>
          <FormGroup
            helperText={ "Helper text with details..." }
          >
            <Switch label="Hide Completed Tasks?" disabled={ false } />

            <HTMLSelect>
              <option selected>Tasks Per Page...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="4">Four</option>
            </HTMLSelect>
          </FormGroup>

        </div>
        <div className={ Classes.DRAWER_FOOTER }>
          <Switch label="Win the Lottery?" disabled={ true } />
          <Button
            onClick={ () => console.log('settings form submitted; go update context') }
          >
            Save Settings
          </Button>
        </div>
      </Drawer>
    </>
  )

}

export default SettingsPage;
