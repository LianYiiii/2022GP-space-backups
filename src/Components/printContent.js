import { convertLegacyProps } from 'antd/lib/button/button';
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import PerContent from './PerContent';


const RequestAjax = (() => {
    const renderInfo = [];
    const [data, setData] = useState({});
    // const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            // setIsloading(true);
            const waitAxios = await axios({
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
                method: 'get',
                // url: 'http://192.168.43.118:8000/api/newsfeeds/'
                url: 'http://10.0.1.119:8000/api/newsfeeds/'
            });
            setData(waitAxios.data);
            // var renderInfo = waitAxios.data;
            // console.log(waitAxios.data);
            // .then(res => {
            //     // console.log(res.data);
            //     // console.log(res.data.newsfeeds);
            //     for (let item = 0; item < res.data.newsfeeds.length; item++) {
            //         // console.log(res.data.newsfeeds[item]);
            //         let items = res.data.newsfeeds[item];
            //         let author = items.dynamic.user ? items.dynamic.user.username : '匿名';
            //         let content = items.dynamic.content;
            //         let createTime = items.dynamic.created_at;
            //         setData(res.data)
            //         console.log(item, res.data);
            //         // console.log(author,content,createTime);
            //         renderInfo.push(
            //             <>
            //                 <div>123</div>
            //                 <PerContent author={author} content={content} createTime={createTime} />
            //             </>
            //         );
            //     }
            // }).catch(err => {
            //     console.log(err);
            // })
            // console.log(renderInfo[0]);
        }
        getData();
    }, []);

    // console.log(data);//0
    data.newsfeeds && data.newsfeeds.map((item, index) => {
        let author = item.dynamic.user ? item.dynamic.user.username : '匿名';
        let content = item.dynamic.content;
        let createTime = item.dynamic.created_at;
        // console.log(item, data);
        // item 是每一项，data是整体，直接利用item即可获取每一项
        // console.log(author, content, createTime); //打印成功
        // console.log(index);
        renderInfo.push(
            <PerContent key={index} author={author} content={content} createTime={createTime} />
        )
        // setIsloading(false);

    })

    return (
        <>
            {/* {isloading ? (<div>Loading...</div>) : ( })*/}
            {renderInfo}

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
