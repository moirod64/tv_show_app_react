import React from 'react';

function DataForm(fn) {
  return (
    <div>
      <form className='input-group' onSubmit={fn.onSubmit}>
        <input
          className='form-control'
          id='query'
          name='query'
          type='text'
          placeholder='Search for your show'
        ></input>
        <button className='btn btn-outline-info'>Search</button>
      </form>
    </div>
  );
}

export default DataForm;
