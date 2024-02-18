import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos || videos.length === 0) return 'Loading...'; // Corrected the spelling of 'length' and added missing null check
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />} {/* Corrected the spacing and indentation */}
          {item.id.channelId && <ChannelCard channelDetails={item} />} {/* Corrected the spacing and indentation */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
