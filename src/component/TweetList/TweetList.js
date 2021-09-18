import React from 'react'
import Tweet from '../Tweet/Tweet'

const TweetList = ({data}) => {
    return (
        <div>
            {data.map((item)=> (
                <Tweet data={item}/>
            ))}
        </div>
    )
}

export default TweetList
