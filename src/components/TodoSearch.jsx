import React from 'react'

const TodoSearch = ({ onSearch }) => {
  const onChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="mb-3">
      <input type="text"
        name="search"
        data-testid="todo-search-input"
        className="form-control"
        placeholder="Search..." 
        onChange={onChange} />
    </div>
  );
}

export default TodoSearch;