window.$ = require('jquery')

import React from 'react'
import ReactDOM from 'react-dom'

import CommentBox from './components/CommentBox'

ReactDOM.render(
    <CommentBox url="http://localhost:8000" />,
    app
)
