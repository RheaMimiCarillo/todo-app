import React, { useContext } from 'react';
import { Button } from "@blueprintjs/core";
// note how this is imported with deconstruction
import { SettingsContext } from '../../context/SettingsContext';

import './PreviousButton.scss';


export default function PreviousButton(props)
{
  const contextValues = useContext(SettingsContext);
  const previous = () =>
  {
    props.setCurrentIndex(props.currentIndex - contextValues.pagination);
  }

  return (
    <>
      <Button
        icon="arrow-left"
        onClick={ previous }
      />
    </>
  )
}
// ternary, if on first page of array, don't display
{ }
