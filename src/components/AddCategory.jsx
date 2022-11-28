import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [InputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!InputValue) return;
    onNewCategory(InputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add category"
        value={InputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
