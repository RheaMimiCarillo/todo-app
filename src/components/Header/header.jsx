import styled, { css } from 'styled-components'

const Header = (props) =>
{
  return (
    <header>
      <h1>To Do List: { props.incomplete } items pending</h1>
      {/* <h1>To Do List: 'will put global state here `incomplete`' items pending</h1> */}
    </header>
  )
}

export default Header;
