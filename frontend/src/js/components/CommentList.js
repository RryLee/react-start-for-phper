import React from 'react'

import Comment from './Comment'

export default class CommentList extends React.Component {
    getCommentNodes() {
        return this.props.data.map(comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        })
    }

    render() {
        return (
            <div class="commentList">
                {this.getCommentNodes()}
            </div>
        )
    }
}