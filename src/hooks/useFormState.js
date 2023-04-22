import axios from 'axios';
import { useState } from 'react';

const API_URL = `https://api.tvmaze.com/search/shows?q=`;

export default function useFormState(val) {
  const [value, setValue] = useState(val);

  const [shows, setShows] = useState(['Search for your favorite shows']);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== undefined) {
      async function getData() {
        const res = await axios.get(`${API_URL}${value}`);
        if (res.data.length !== 0) {
          setShows(res.data);
        } else {
          setShows(['Show not Found']);
        }
      }
      getData();
    }
  };

  return [value, shows, handleChange, handleSubmit];
}
