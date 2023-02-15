import React from 'react';
 
const Post = (props) => {
    return (<p>{props.post.name} {props.post.post}</p>);
}
 
export default Post;