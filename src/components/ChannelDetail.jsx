import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from '.'; 
import { YouTube } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetails]= useState(null);
  const [videos, setVideos] = useState(null);


  const { id } = useParams();

  console.log(channelDetail, videos)

  useEffect(() =>  {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
     .then((data) => setChannelDetails(data?.items[0]));

     fetchFromAPI(`search?channelId=${id}&part=snippet& order=data`)
     .then((data) => setVideos(data?.items));
  }, [id])

  return(
<Box minHeight="95vh">
  <Box>
    <div style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
      zIndex: 10,
      height: '300px'
    }}
    />
    <ChannelCard channelDetail={channelDetail}
    marginTop = "110px" />
  </Box>
  <Box display="flex" p="2">
    <Box sx={{mr: {sm: '100px'}}}>
      <Videos videos={videos}/>
    </Box>
  </Box>
</Box>
  )
}

export default ChannelDetail