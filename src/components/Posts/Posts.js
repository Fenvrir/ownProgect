import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Post from './Post.js/Post';
import { addPost, deletePost, getPostsThunk } from '../Redux/Posts-reducer';
import PostInput from './PostInput.js/PostInput.js';

const Posts = (props) => {

  useEffect(() => {
    props.getPostsThunk();
  }, []);

  if(props.postsList === undefined) {
    return <div>
      Preloader...
    </div>
  }

  return (
    <div className='Main'>
      {props.postsList.map(post => {
        return <Post name={post.title} id={post.id} key={post.id} description={post.body} deletePost={() => { props.deletePost(post.id) }} />
      })}
      <PostInput addPost={props.addPost} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  postsList: state.postReducer.posts
});

export default connect(mapStateToProps, { deletePost, addPost, getPostsThunk })(Posts);
