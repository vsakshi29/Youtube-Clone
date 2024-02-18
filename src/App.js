import {BrowserRouter, Routes, Route } from 'react-router-dom';
import{ Box } from '@mui/material';

import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed, Videos, SideBar } from './components';

const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
     <Navbar />
     <Feed></Feed>
     <Routes>
      <Route path="/feed" exact element={<Feed />} />
      <Route path="/videoDetails/:id" element={<VideoDetails />} />
      <Route path="/video/:id" element={<Videos />} />
      <Route path="/channel/:id" element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      <Route path="/sideBar/:id" element={<SideBar/>} />
     </Routes>
    </Box>
    </BrowserRouter>
    );


export default App
