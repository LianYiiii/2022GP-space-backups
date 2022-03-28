// // import React from 'react'
// // import { Comment, Avatar, Tooltip } from 'antd';
// // import { Skeleton } from 'antd';
// // import moment from 'moment';
// // import Demo from './DemoZan';

// // const ExampleComment = ({ children }) => (
// //   <Comment
// //     actions={[<span key="comment-nested-reply-to">Reply to</span>]}
// //     author={<a>Han Solo</a>}
// //     avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />} datatime={<Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
// //       <span>{moment().subtract(1, 'days').fromNow()}</span>
// //     </Tooltip>}
// //     content={
// //       <p>在这里给我接口</p>
// //     }
// //   ><Demo />
// //     {children}
// //   </Comment>
// // );

// // export default function IuseContent() {
// //   return (
// //     <div>
// //       <ExampleComment ></ExampleComment>
// //       <ExampleComment>
// //         <ExampleComment />
// //       </ExampleComment>
// //       <Skeleton avatar paragraph={{ rows: 3 }} />
// //     </div>
// //   )
// // }

// // import React from 'react'
// // import { Comment, Tooltip, List } from 'antd';
// // import moment from 'moment';

// // const data = [
// //   {
// //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
// //     author: 'Han Solo',
// //     avatar: 'https://joeschmoe.io/api/v1/random',
// //     content: (
// //       <p>
// //         We supply a series of design principles, practical patterns and high quality design
// //         resources (Sketch and Axure), to help people create their product prototypes beautifully and
// //         efficiently.
// //       </p>
// //     ),
// //     datetime: (
// //       <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
// //         <span>{moment().subtract(1, 'days').fromNow()}</span>
// //       </Tooltip>
// //     ),
// //   },
// //   {
// //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
// //     author: 'Han Solo',
// //     avatar: 'https://joeschmoe.io/api/v1/random',
// //     content: (
// //       <p>
// //         We supply a series of design principles, practical patterns and high quality design
// //         resources (Sketch and Axure), to help people create their product prototypes beautifully and
// //         efficiently.
// //       </p>
// //     ),
// //     datetime: (
// //       <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
// //         <span>{moment().subtract(2, 'days').fromNow()}</span>
// //       </Tooltip>
// //     ),
// //   },
// // ];



// // export default function IuseContent() {
// //   return (
// //     <>
// //       <List
// //         className="comment-list"
// //         header={`${data.length} replies`}
// //         itemLayout="horizontal"
// //         dataSource={data}
// //         renderItem={item => (
// //           <li>
// //             <Comment
// //               actions={item.actions}
// //               author={item.author}
// //               avatar={item.avatar}
// //               content={item.content}
// //               datetime={item.datetime}
// //             />
// //           </li>
// //         )}
// //       />
// //     </>
// //   )
// // }

// import React, { createElement, useState } from 'react'
// import { Comment, Avatar, Tooltip } from 'antd';
// import moment from 'moment';
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

// const Demo = () => {
//   const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [action, setAction] = useState(null);

//   const like = () => {
//     setLikes(1);
//     setDislikes(0);
//     setAction('liked');
//   };

//   const dislike = () => {
//     setLikes(0);
//     setDislikes(1);
//     setAction('disliked');
//   };

//   const actions = [
//     <Tooltip key="comment-basic-like" title="Like">
//       <span onClick={like}>
//         {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
//         <span className="comment-action">{likes}</span>
//       </span>
//     </Tooltip>,
//     <Tooltip key="comment-basic-dislike" title="Dislike">
//       <span onClick={dislike}>
//         {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
//         <span className="comment-action">{dislikes}</span>
//       </span>
//     </Tooltip>,
//     <span key="comment-basic-reply-to">Reply to</span>,
//   ];

//   return (
//     <Comment
//       actions={actions}
//       author={<a>Han Solo</a>}
//       avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
//       content={
//         <p>
//           We supply a series of design principles, practical patterns and high quality design
//           resources (Sketch and Axure), to help people create their product prototypes beautifully
//           and efficiently.
//         </p>
//       }
//       datetime={
//         <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
//           <span>{moment().fromNow()}</span>
//         </Tooltip>
//       }
//     />
//   );
// };
// const ExampleComment = ({ children }) => (
//   <Comment
//     actions={actions}
//     author={<a>Han Solo</a>}
//     avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
//     content={
//       <p>
//         We supply a series of design principles, practical patterns and high quality design
//         resources (Sketch and Axure).
//       </p>
//     }
//   >
//     {children}
//   </Comment>
// );


// export default function PerContent() {
//   return (
//     <>
//       <ExampleComment>
//         <ExampleComment>
//           <ExampleComment />
//           <ExampleComment />
//         </ExampleComment>
//       </ExampleComment>
//     </>
//   )
// }
