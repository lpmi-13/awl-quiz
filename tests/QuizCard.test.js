import React from 'react';

import QuizCard from '../src/QuizCard';

const tweets = {
    tweetResults: [
        'tweet1',
        'tweet2',
        'tweet3',
    ]
}

describe('QuizCard component', () => {
    it('should render okay', () => {
        const wrapper = shallow(<QuizCard tweets={tweets} />)
        expect(wrapper).to.exist;
    });
})