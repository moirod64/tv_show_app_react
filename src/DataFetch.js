import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import DataDisplay from './DataDisplay';
import DataForm from './DataForm';

function DataFetch() {
  const [data, setData] = useState();
  const getShows = event => {
    event.preventDefault();
    const query = event.target.query.value;
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => setData(response.data.map(shows => shows)));

    event.target.query.value = '';
  };
  return (
    <div>
      <h1 className='display-3 mb-4'>TV Show Looker-Up</h1>
      <DataForm onSubmit={getShows} />
      <DataDisplay data={data} />
    </div>
  );
}

export default DataFetch;
