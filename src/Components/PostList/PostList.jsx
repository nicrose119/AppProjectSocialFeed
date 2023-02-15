import React from 'react';
import Post from '../Post/Post';

const PostList = (props) => {
    return (<div>{props.postArray.map((post, index) => {
        return <Post key={index} post = {post}/>
    })}</div>);
}
export default PostList;