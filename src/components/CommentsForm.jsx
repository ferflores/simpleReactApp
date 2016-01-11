import React from 'react';

class CommentsForm extends React.Component {
  render(){
    return (
      <div>
        <table >
          <tbody>
            <tr>
              <td>comment:</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="button" value="add" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CommentsForm;
