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
import './Header.scss';

const Header = (props) =>
{
  return (
    <header>
      <Navbar className='rule'>
        <NavbarGroup align={ Alignment.LEFT }>
          <Button className={ Classes.MINIMAL } icon="home" text="Home" />
          <NavbarDivider />
          <NavbarHeading>To Do List</NavbarHeading>
          <NavbarDivider />
          <NavbarHeading>{ props.incomplete } items pending</NavbarHeading>
        </NavbarGroup>
      </Navbar>
    </header>
  )
}

export default Header;
