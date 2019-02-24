import axios from 'axios';
import React, { Component } from 'react';

import Loading from './Loading';

class Main extends Component {

  constructor(){
    super();
  
    this.state = {
      sentences: [],
    }
  }

  render() {
    return (
      <div className="container">
        <div>Pick a word to take a quiz</div>
      </div>
    )
  }
}

export default Main;
