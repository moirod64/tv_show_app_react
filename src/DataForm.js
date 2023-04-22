import React from 'react';

function DataForm(props) {
  return (
    <div>
      <form className='input-group' onSubmit={props.setShows}>
        <input
          className='form-control'
          id='query'
          name='query'
          type='text'
          placeholder='Search for your show'
          onChange={props.setQuery}
        ></input>
        <button className='btn btn-outline-info'>Search</button>
      </form>
    </div>
  );
}

export default DataForm;
