import React, { Component } from 'react'
import PerContent from './PerContent';

export default class PrintContent extends Component {
    state = {
        "talk":
            [{
                "author": "laowang",
                "create-time": "2022-12-26 13:14",
                "file-id": "01",
                "content": "hello,i'm laowang",

            }, {
                "author": "laolian",
                "create-time": "2022-12-28 05:21",
                "file-id": "02",
                "content": "hello,i'm laolian",
            }]
    }
    render() {
        const fileInfo = this.state;
        console.log(fileInfo.talk.length);
        console.log(this.state.talk[0]);
        const renderInfo = [];
        for (let i = 0; i < fileInfo.talk.length; i++) {
            renderInfo.push(
                <PerContent author={this.state.talk[i]} />
            );
        }
        return (
            <>{renderInfo}</>
        )
    }
}
