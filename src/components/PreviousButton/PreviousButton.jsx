import React, { useContext } from 'react';
import { Button } from "@blueprintjs/core";
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
