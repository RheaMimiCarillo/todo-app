import './SnackBar.scss';
import { Position, Toast, Toaster, IToasterProps } from "@blueprintjs/core";
import React, { useState, useEffect } from 'react';

/*  TODO:

  refactor into Context, so that I can call these methods from anywhere
    - bug: toast appears when list items are deleted
*/

/** Singleton toaster instance. Create separate instances for different options. */
export const AppToaster = Toaster.create({
  className: "toast",
  position: Position.BOTTOM,
});

function AppToasterProvider(props)
{
  useEffect(() =>
  {
    showToast();
  }, [ props.list ]);

  const showToast = () =>
  {
    // create toasts in response to interactions.
    // in most cases, it's enough to simply create and forget (thanks to timeout).

    Boolean(props.list.length) && AppToaster.show({
      message: `Added: ${props.list[props.list.length-1].text} for ${props.list[props.list.length-1].assignee}`
    });
  }

  return (
    undefined
  )
}

export default AppToasterProvider;
