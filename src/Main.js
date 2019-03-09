import axios from 'axios';
import React, { Component } from 'react';

import data from './data/sentences';
import Loading from './Loading';

class Main extends Component {

  constructor(){
    super();
  
    this.state = {
      sentences: data,
    }
  }

  render() {
    const { sentences } = this.state;
    console.log({ sentences} );

    return (
      <div className="container">
        <div>Pick a word to take a quiz</div>
        <ul>
          {sentences && sentences.map((item, index) => {
             <li key={index}>item</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Main;
