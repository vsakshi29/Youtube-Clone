import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] =useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{e.preventDefault();
    if(searchTerm){
    navigate(`/search/$(searchTerm)`);
    setSearchTerm('');
  }
}
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        p1: 2,
       // display: 'flex',
        //alignItems: 'center',
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <inputBase
        className="Search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        //sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="submit" sx={{ p: 1, color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
