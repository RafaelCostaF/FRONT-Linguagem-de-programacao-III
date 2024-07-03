// Posts.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import '../styles.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Posts = ({ 
  avatarLetter = 'U', 
  avatarColor = red[500], 
  username = 'Default User', 
  timestamp = 'Date Unknown', 
  content = 'No content available.', 
  mediaType = null, 
  mediaSrc = '', 
  detailedContent = [] 
}) => {
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='post'>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: avatarColor }} aria-label="user">
            {avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader={timestamp}
      />
      {mediaType && (
        <CardMedia
          component={mediaType === 'image' ? 'img' : 'iframe'}
          height="194"
          image={mediaSrc}
          src={mediaSrc}
          alt={`${mediaType} content`}
        />
      )}
      <CardContent>
        <Typography className='postFont'>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {Array.isArray(detailedContent) ? (
            detailedContent.map((paragraph, index) => (
              <Typography paragraph key={index}>
                {paragraph}
              </Typography>
            ))
          ) : (
            <Typography paragraph>
              {detailedContent || "No detailed content available"}
            </Typography>
          )}
          <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
            Comments:
          </Typography>
          {comments.map((comment, index) => (
            <Typography key={index} paragraph>
              {comment}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

Posts.propTypes = {
  avatarLetter: PropTypes.string,
  avatarColor: PropTypes.string,
  username: PropTypes.string,
  timestamp: PropTypes.string,
  content: PropTypes.string,
  mediaType: PropTypes.oneOf(['image', 'iframe']),
  mediaSrc: PropTypes.string,
  detailedContent: PropTypes.arrayOf(PropTypes.string),
};

export default Posts;
