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
import { useState } from 'react';
import './Header.scss';
import SettingsPage from '../SettingsPage/SettingsPage.jsx';

const Header = (props) =>
{
  const [ isOpen, setIsOpen ] = useState(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <header data-testid="header">
      <Navbar className={ `rule bp4-dark` }>
        <SettingsPage
          isOpen={ isOpen }
          setIsOpen={ setIsOpen }
        />
        <NavbarGroup align={ Alignment.LEFT }>
          <NavbarHeading>To Do List</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={ Alignment.LEFT }>
          <Button
            className={ Classes.MINIMAL }
            icon="home"
            onClick={ () => window.location.reload() }
          />
          <NavbarDivider />
          <When condition={ props.incomplete }>
            <NavbarHeading id='incomplete'>
              { props.incomplete } { props.incomplete > 1 ? 'items' : 'item' } pending
            </NavbarHeading>
          </When>

        </NavbarGroup>
        <NavbarGroup align={ Alignment.RIGHT }>
          <NavbarDivider />
          <Button
            className={ Classes.MINIMAL }
            icon="user"
          />
          <Button
            className={ Classes.MINIMAL }
            icon="cog"
            onClick={ handleOpen }
          />
        </NavbarGroup>
      </Navbar>
    </header>
  )
}

export default Header;
