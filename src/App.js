import React from 'react';
import './App.css';
import PostItem from './PostItem'

/**
 * Hauptkomponente, die als EntryPoint der Applikation dient
 */
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [
        {
          id: "post1",
          title: "post 1",
          description: "Das ist der erste post",
          chosen: false, 
        },
        {
          id: "post2", 
          title: "post 2",
          description: "Das ist der zwiete post",
          chosen: false
       },
       {
         post: "post3", 
         title: "post 3",
         description: "Das ist der dritte post",
         chosen: false
       }
      ]
    }
  }

  onChoosePost = (postID) => {
    let newPosts = []
    this.state.posts.forEach(post => {
      if (post.id == postID){
        post.chosen = true
      }
      newPosts.push(post)
    })
    this.setState(state => ({
      ...state,
      posts: newPosts
    }))
  }

  render() {
    return (
      <div>
        <h1>React Übung 3</h1>
        {/* loop über die einzelnen posts */}
        {this.state.posts.map(post => (
          <PostItem
            title={post.title}
            description={post.description}
            chosen={post.chosen}

            // die funktion die hier übergeben wird, wird bei 
            onChoose={this.onChoosePost.bind(this, post.id)}
            
          />
        ))}
      </div>
    ) 
  }
}


export default App
