import { Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import TweetList from '../../component/TweetList/TweetList'
import useStyles from '../Styles'
import Header from '../../component/Header/Header'
import { Person } from '@material-ui/icons'
import { getAllTweets } from '../../api/api_tweet'

const TweetsByUser = (props) => {

    const [tweets,setTweets] = useState([])

    useEffect(()=>{
        getAllTweets((isOk,data)=>{
            if(!isOk)
                return alert(data.massege);
            else setTweets(data)
        })
    },[])

    const classes = useStyles()
    return (
        <div>
            
            <Header icon={<Person/>} title={props.match.params.user} />
            <Divider className={classes.divder}/>
            <TweetList data={tweets}/>
        </div>
    )
}

export default TweetsByUser