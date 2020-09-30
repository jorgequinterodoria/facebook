import React, { useState, useEffect } from 'react'
import './../css/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>{
            setPosts(snapshot.docs.map((doc) =>({id: doc.id, data:doc.data()})))
        })
        
    }, [])


    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {/* dummy post
            <Post  
                //key={id}
                profilePic="https://avatars2.githubusercontent.com/u/69540195?s=60&v=4"
                message="Mensaje 1"
                //timestamp={timestamp}
                username="Jorge Quintero"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post
                //key={id}
                profilePic="https://avatars2.githubusercontent.com/u/69540195?s=60&v=4"
                message="Mensaje 1"
                //timestamp={timestamp}
                username="Jorge Quintero"
                
            /> */}

            {posts.map((post)=>(
                <Post  
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}

        </div>
    )
}

export default Feed

