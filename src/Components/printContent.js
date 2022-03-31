import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import PerContent from './PerContent';


const RequestAjax = (() => {
    const renderInfo = [];
    const [data, setData] = useState({ renderInfo: [] });

    useEffect(() => {
        const getData = async () => {
            const waitAxios = await axios({
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
                method: 'get',
                url: 'http://192.168.43.118:8000/api/newsfeeds/'
                // url: 'http://10.0.1.119:8000/api/newsfeeds/'
            }).then(res => {
                    console.log(res.data);
                    console.log(res.data.newsfeeds);
                    for (let item = 0; item < res.data.newsfeeds.length; item++) {
                        // console.log(res.data.newsfeeds[item]);
                        console.log(res);
                        let items = res.data.newsfeeds[item];
                        let author = items.dynamic.user ? items.dynamic.user.username : '匿名';
                        let content = items.dynamic.content;
                        let createTime = items.dynamic.created_at;
                        // console.log(author,content,createTime);
                        renderInfo.push(
                            <>
                                <div>123</div>
                                <PerContent author={author} content={content} createTime={createTime} /></>
                        );
                    }
                }).catch(err => {
                    console.log(err);
                })
                setData(waitAxios.data)

        }
        getData();
    }, []);

    console.log(renderInfo);

    return (
        <>

        </>
    )
})

export default function PrintContent() {
    return (
        <><RequestAjax /></>
    )
}




    // 异步未完成
    // render() {
    //     axios({
    //         headers: {
    //             'Authorization': localStorage.getItem('token')
    //         },
    //         method: 'get',
    //         // url: 'http://192.168.72.1:8000/api/newsfeeds/'
    //         url: 'http://10.0.1.119:8000/api/newsfeeds/'
    //     }).then(res => {
    //         // console.log(res.data.newsfeeds);
    //         for (let item = 0; item < res.data.newsfeeds.length; item++) {
    //             // console.log(res.data.newsfeeds[item]);
    //             let items = res.data.newsfeeds[item];
    //             let author = items.dynamic.user ? items.dynamic.user.username : '匿名';
    //             let content = items.dynamic.content;
    //             let createTime = items.dynamic.created_at;
    //             renderInfo.push(
    //                 <>
    //                     <div>123</div>
    //                     <PerContent key={item} /></>
    //             );
    //         }
    //         // console.log(renderInfo);
    //     }).catch(err => {
    //         console.log(err);
    //     })



    // return(
    //         <>
    // { renderInfo }
    //         </>
    //     )

// }
