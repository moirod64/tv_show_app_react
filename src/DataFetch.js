import React, { useState } from 'react';
import axios from 'axios';
import DataDisplay from './DataDisplay';
import DataForm from './DataForm';

const API_URL = `https://api.tvmaze.com/search/shows?q=`;

function DataFetch() {
  const [data, setData] = useState();

  const getShows = async e => {
    e.preventDefault();
    const query = e.target.query.value;
    const dataFetch = await axios.get(`${API_URL}${query}`);
    setData(dataFetch.data);
    e.target.query.value = '';
  };

  return (
    <div>
      <h1 className='display-3 mb-4'>TV Show Looker-Up</h1>
      <DataForm onSubmit={getShows} />
      <DataDisplay showsData={data} />
    </div>
  );
}

export default DataFetch;
