import './SettingsPage.scss';
import { FormGroup, InputGroup, Intent, Switch } from "@blueprintjs/core";

/* TODO
X Provide the users with a form where they can change the values for those settings
    X This should be given in the form of a new component, perhaps linked to from the main navigation
    - Hint: Use Browser Router to create the page/route/component for this

  X Save the users choices in Local Storage
    X Retrieve their preferences from Local Storage and apply them to the application on startup
*/

function SettingsPage(props)
{
  return (
    <>
      <FormGroup
        disabled={ false }
        helperText={  "Helper text with details..." }
        inline={ false }
        label={ "Label" }
        labelFor="text-input"
        labelInfo={  true && "(required)" }
        subLabel={ true && "Label helper text with details..." }
      >
        <InputGroup id="text-input" placeholder="Placeholder text" disabled={ false } />
      </FormGroup>
      <FormGroup
        disabled={ false }
        helperText={  "Helper text with details..." }
        inline={ true }
        label={  "Label" }
        labelInfo={  "(required)" }
      >
        <Switch label="Engage the hyperdrive" disabled={ false } />
        <Switch label="Initiate thrusters" disabled={ false } />
      </FormGroup>
    </>
  )

}

export default SettingsPage;
