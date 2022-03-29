import axios from 'axios';
import React, { Component } from 'react'
import PerContent from './PerContent';

const renderInfo = [];


export default class PrintContent extends Component {
    // state = {
    //     "talk":
    //         [{
    //             "author": "laowang",
    //             "createTime": "2022-12-26 13:14",
    //             "file-id": "01",
    //             "content": "hello,i'm laowang",

    //         }, {
    //             "author": "laolian",
    //             "createTime": "2022-12-28 05:21",
    //             "file-id": "02",
    //             "content": "hello,i'm laolian",
    //         }]
    // }

    
    render() {
        // console.log(fileInfo.talk.length);
        // console.log(this.state.talk[0]);
        axios({
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
                method: 'get',
                url: 'http://192.168.43.118:8000/api/newsfeeds/'
        }).then(res => {
            // console.log(res.data);
            for (let item = 0; item < res.data.newsfeeds.length;item++) {
                // console.log(res.data.newsfeeds[item]);
                let items = res.data.newsfeeds[item];
                let author = items.dynamic.user? items.dynamic.user.username:'匿名';
                let content = items.dynamic.content;
                let createTime = items.dynamic.created_at;
                renderInfo.push(
                    <>
                        <div>123</div>
                    <PerContent key={item} /></>
                );
            }    
            console.log(renderInfo);
        }).catch(err => {
            console.log(err);
        })
        const waitAsy = await 
          
        return (
            <>
                {renderInfo}
            </>
        )
    }
}
