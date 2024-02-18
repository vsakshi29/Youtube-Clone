import React from 'react'; // Import React to use JSX syntax
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material'; // Corrected import statement for CardMedia
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: {xs: '100%', md: '320px' }, boxShadow: 'none', borderRadius: '0' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img" // Specify component as 'img' for CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} // Use demoThumbnailUrl as fallback
          alt={snippet?.title} // Removed extra space after '?'
          sx={{ width: {xs: '100%', sm: '358px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}> {/* Moved CardContent inside Link */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF"> {/* Corrected variant prop name */}
            {snippet?.channelTitle || demoChannelTitle}
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
