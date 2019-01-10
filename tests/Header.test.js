import React from 'react';

import Header from '../src/Header';

describe('the Header', () => {
    it('should render okay', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).to.exist;
    });
});