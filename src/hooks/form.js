import { useState, useEffect } from 'react';

// this component accepts 2 parameters:
// 1. a callback function
// 2. the default state/data
//
const useForm = (callback, defaultValues={}) => {

  // declare `values` state as `{}`, as well as a setter
  const [values, setValues] = useState({});

  // onSubmit => calls the `callback()` and passes in the `values` state
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(values);
  };

  // listens for event and sets new entries to `value` state
  const handleChange = (event) => {
    // event.persist() allows React to maintain values
    event.persist();

    let { name, value } = event.target;

    // if we can parse an integer from the `event.target.value` object
    if (parseInt(value)) {
      // assign the parsed value integer to `value`
      value = parseInt(value);
    }

    // retain current `values` state and add new value entries
    setValues(values => ({ ...values, [name]: value }));
  };

  // subscribe to changes to `defaultValues` and set those values to state
  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
