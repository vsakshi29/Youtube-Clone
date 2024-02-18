import React from 'react'; // Import React to use JSX syntax
import { Box, CardContent, CardMedia, Typography } from '@mui/material'; // Corrected import statement for CardMedia
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box sx={{ 
      boxShadow: 'none',
       borderRadius: '20px',
       display:'flex',
       justifyContent: 'center',
        alighItems: 'center',
        width: {xs:'356',md: '320px'},
        height:'326px',
        margin:'auto',
        marginTop,
         }}> {/* Fixed borderRadius typo */}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            component="img" // Specify component as 'img' for CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title} // Added missing curly braces
            sx={{ borderRadius: '50%', height: '180px',width: '180px', mb:2, border: '1px solid#e3e3e3' }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?. subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
