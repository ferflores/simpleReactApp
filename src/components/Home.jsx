import React from 'react';
import TextList from './TextList'
import { Link } from 'react-router';

class Home extends React.Component {
  render(){
    return (<div>Main compontent! <Link to='/login'>test</Link> {this.props.children} </div>);
  }
}

export default Home;
