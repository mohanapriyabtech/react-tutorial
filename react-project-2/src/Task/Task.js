import React, { useState, useEffect } from 'react';
import List from "../list/List"

const Task = () => {
  const [inputValues, setInputValues] = useState(['']);
  const [keyValuePairs, setKeyValuePairs] = useState([]);
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    const updatedKeyValuePairs = inputValues.map((value) => (value));
    setKeyValuePairs(updatedKeyValuePairs);
  }, [inputValues]);

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  const handleAddInput = () => {
    setInputValues([...inputValues, '']);
  };

  const handleSave = () => {
    console.log(keyValuePairs);
    setShowList(true)
  };

  return (
    <div>
      <p>Task</p>
      {inputValues.map((value, index) => (
        <div key={index}>
          <input
            placeholder="Enter a new task..."
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              handleInputChange(index, newValue);
            }}
          />
        </div>
      ))}
      <button onClick={handleAddInput}>Add</button>
      <button onClick={handleSave}>Save</button>
      {showList && <List data={keyValuePairs} />}
    </div>
  );
};

export default Task;
