import React from 'react';
import TextList from './TextList'
import { Link } from 'react-router';

class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>Main compontent!</h1>
        <ul>
          <li>
            <Link to='/test'>test</Link>
          </li>
          <li>
            <Link to='/comments'>comments</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
