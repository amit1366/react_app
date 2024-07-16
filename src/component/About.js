/* eslint-disable react/require-render-return */
import React, { Component } from 'react';
// import NewsCarditem from './Carditem';

class NewsCard extends Component {

   render(){
        <>
            <div className='bm-newscard'>Hello, this is a news card.</div>
            <div className="container">
                <div className="row">
                    <div className="card-content-item">
                        {/* <NewsCarditem/> */}
                    </div>
                </div>
            </div>
        </>
   } 
}
export default NewsCard;
// export default function NewsCard(props) {

//     return (
//         <>
//             <div className='bm-newscard'>Hello, this is a news card.</div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <NewsCarditem title="hello this is title" description="this is description" imgurl="url" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }