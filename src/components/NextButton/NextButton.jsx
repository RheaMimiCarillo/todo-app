import React, { useContext } from 'react';
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

export default function PreviousButton(props)
{
  const contextValues = useContext(SettingsContext);
  const next = () =>
  {
    props.setCurrentIndex(props.currentIndex + contextValues.pagination);
  }
  return (<button onClick={ next }>Next</button>)
}
// ternary, if on last page of array, don't display
