import React from 'react';

import Main from '../src/Main';

describe('Main component', () => {
    it('should render okay', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper).to.exist;
    });
});