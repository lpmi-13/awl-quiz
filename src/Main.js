import axios from 'axios';
import React, { Component } from 'react';

import Loading from './Loading';
import QuizCard from './QuizCard';
import Score from './Score';

const BASE_URL = 'http://localhost:3001/?term=TERM&count=COUNT';

class Main extends Component {

  constructor(){
    super();
  
    this.state = {
      fetching: false,
      textValue: '',
      tweets : [],
    }
    
    this.fetchTweets = this.fetchTweets.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  fetchTweets(searchTerm){
    const requestURL = BASE_URL
      .replace('TERM', searchTerm)
      .replace('COUNT', '5');
    axios.get(requestURL)
      .then(res => {
        const tweets = res.data;
        this.setState({ tweets });
      });
    this.setState({ textValue: '' });
    this.setState({ fetching: false });
  }

  handleOnChange(e){
    const { value } = e.target;
    this.setState({ textValue: value})
  }

  handleSubmit(e) {
    const { textValue } = this.state;
    e.preventDefault();
    this.fetchTweets(textValue);
  }

  componentDidMount() {
    this.setState({ fetching: true });
    this.fetchTweets('politics');
  }

  render() {
    const { fetching, tweets } = this.state;
    return (
      <div className="container">
        <div>Put in a search term to take a quiz</div>
        <input type="text" onChange={this.handleOnChange} value={this.state.textValue} />
        <input type="submit" onClick={this.handleSubmit} />
        {fetching && <Loading />}
        {!fetching && <QuizCard tweets={tweets} />}
        <Score />
      </div>
    )
  }
}

export default Main;
