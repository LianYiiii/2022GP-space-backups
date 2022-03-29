import React, { createElement, useState, Component } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import AddComment from './AddComment';

const Demo = (props) => {
    console.log(props);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    // const [addReplay, setReplay] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    // const addReply = () => {
    //     setReplay(1);
    //     setAction('Replay')
    //     console.log(123);
    // }

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" >Reply to</span>,
    ];
    const ExampleComment = ({ children }) => (
        <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>}
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }

        >
            {children}
        </Comment >
    );

    return (
        <ExampleComment>
        </ExampleComment>
    );
};

export default class PerContent extends Component {
    render() {
        return (
            <>
                <Demo></Demo>
            </>
        )
    }
}
