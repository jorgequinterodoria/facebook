import React from 'react'
import Story from './Story'
import './../css/StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileSrc="https://avatars2.githubusercontent.com/u/69540195?s=60&v=4"
                title="Jorge Quintero"
            />
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://cdn5.vectorstock.com/i/1000x1000/17/54/faces-avatar-in-circle-portrait-young-boy-with-vector-12511754.jpg"
                title="Juan Perez"
            />
            <Story
                image="https://assets.materialup.com/uploads/dce743df-8003-4f69-a3a2-c779a2f393b4/attachment"
                profileSrc="https://www.pngitem.com/pimgs/m/111-1114839_circle-people-icon-flat-png-avatar-icon-transparent.png"
                title="Pepito"
            />
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/choose-category-facebook-stories.png"
                profileSrc="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                title="Luchito"
            />
            <Story
                image="https://www.socialmediamarketingnerds.com/wp-content/uploads/2019/02/7-1.png"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzwyqpjAmQf9cJZJYedogG6ivGM_FAyiIOwQ&usqp=CAU"
                title="El Ñaca"
            />
        </div>
    )
}

export default StoryReel 
