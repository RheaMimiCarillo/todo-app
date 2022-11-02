import React, { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';


export default function PreviousButton(props)
{
  const contextValues = useContext(SettingsContext);
  const previous = () =>
  {
    props.setCurrentIndex(props.currentIndex - contextValues.pagination);
  }

  return (<button onClick={ previous }>Previous</button>)
}
// ternary, if on first page of array, don't display
{}
