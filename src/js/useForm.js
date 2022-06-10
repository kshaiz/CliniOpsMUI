import React from 'react';

const UseForm = (initialVal) => {
  const [ val, setVal ] = React.useState(initialVal);
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setVal({
      ...val,
      [name]: value
    })
  };

  return {
    val,
    setVal,
    handleFormChange
  }
};

export default UseForm;