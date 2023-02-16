import React, { useState } from 'react';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            comment: comment
        };
        console.log(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type= 'text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Comment</label>
            <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>
            <button type='submit'>Post Comment</button>
        </form>
    );
}
 
export default CreatePostForm;