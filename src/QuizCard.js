import React from 'react';
import PropTypes from 'prop-types';

import TweetCard from './TweetCard';

const QuizCard = ({tweets}) => {
  const { tweetResults } = tweets;
  return (
    <div className="quiz-card">
      <div className="instructions">Select the article that's missing</div>
      {
        tweetResults && tweetResults.map((tweet) => {
          return <TweetCard key={tweet} tweet={tweet} />
        })
      }
    </div>
  )
}

QuizCard.propTypes = {
  tweets: PropTypes.object,
}

export default QuizCard;
