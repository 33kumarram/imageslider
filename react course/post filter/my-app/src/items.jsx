import React from "react";

 const CollectionPost = props =>{
    return(
        <div className='my'>
        {
         props.posts.map(post =>(
         <h1 key={post.id}>
           {post.title}
         </h1>))
        }
       </div>
    )
 
}
export default CollectionPost