import styled, { css } from 'styled-components';
import
{
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,

} from "@blueprintjs/core";
import { When } from 'react-if';
import './Header.scss';

const Header = (props) =>
{
  return (
    <header data-testid="header">
      <Navbar className='rule'>
        <NavbarGroup align={ Alignment.LEFT }>
          <Button
            className={ Classes.MINIMAL }
            icon="home"
            onClick={() => window.location.reload()}
          />
          <NavbarDivider />
          <NavbarHeading>To Do List</NavbarHeading>
          <NavbarDivider />
          <When condition={ props.incomplete }>
            <NavbarHeading id='incomplete'>
              { props.incomplete } {props.incomplete>1?'items':'item'} pending
            </NavbarHeading>
          </When>
        </NavbarGroup>
      </Navbar>
    </header>
  )
}

export default Header;
