import React from 'react'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.loadCommentsFromServer()
        setInterval(this.loadCommentsFromServer.bind(this), 2000)
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data})
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString())
            }
        })
    }

    handleCommentSubmit(comment) {
        var comments = this.state.data

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: data => {
                this.setState({data})
            },
            error: (xhr, status, err) => {
                this.setState({data: comments})
                console.error(this.props.url, status, err.toString())
            }
        })
    }

    render() {
        return (
            <div class="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        )
    }
}