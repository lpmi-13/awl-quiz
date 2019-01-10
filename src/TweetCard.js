import React from 'react';

const TweetCard = ({tweet}) => {
  return (
    <div className="tweet-card">
      <p>{tweet}</p>
    </div>
  )
}

export default TweetCard;
