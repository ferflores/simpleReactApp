import React from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

class CommentsBox extends React.Component {
  render(){
    let data = [
        {id: 1, author: "Pete Hunt", text: "This is one comment"},
        {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
      ];
    return (
      <div>
        < CommentsList data={data} />
        < CommentsForm />
      </div>
    );
  }
}

export default CommentsBox;
