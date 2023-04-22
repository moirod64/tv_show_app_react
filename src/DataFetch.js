import React from 'react';
import DataDisplay from './DataDisplay';
import DataForm from './DataForm';
import useFormState from './hooks/useFormState';

function DataFetch() {
  const [query, shows, setQuery, setShows] = useFormState();

  return (
    <div>
      <h1 className='display-3 mb-4'>TV Show Looker-Up</h1>
      <DataForm setShows={setShows} setQuery={setQuery} />
      <DataDisplay showsData={shows} queryInput={query} />
    </div>
  );
}

export default DataFetch;
