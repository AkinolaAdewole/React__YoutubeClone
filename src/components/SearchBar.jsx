import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  // Define a state variable 'searchTerm' to store the search input.
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  // Function to handle form submission
  const onhandleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.

    if (searchTerm) {
      // If a search term exists, navigate to the search results page.
      navigate(`/search/${searchTerm}`);
      // Clear the search input by resetting 'searchTerm'.
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
