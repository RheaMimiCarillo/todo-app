import React, { useContext } from 'react';
import { Button } from "@blueprintjs/core";
import { SettingsContext } from '../../context/SettingsContext';

import './NextButton.scss';

export default function PreviousButton(props)
{
  const contextValues = useContext(SettingsContext);
  const next = () =>
  {
    props.setCurrentIndex(props.currentIndex + contextValues.pagination);
  }
  return (
    <>
      <Button
        icon="arrow-right"
        onClick={ next }
      />
    </>
  )
}
