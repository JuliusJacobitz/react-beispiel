import React from 'react';

class PostItem extends React.Component {

    render() {
        return (
          <div>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>
            {/* wenn chosen==true, dann wird das p ausgegeben */}
            {this.props.chosen && 
              <p>Post ausgewählt</p>
            }
            <button onClick={this.props.onChoose}>post auswählen</button>
          </div>
        );
    }
}

export default PostItem