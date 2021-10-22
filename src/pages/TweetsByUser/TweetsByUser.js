import { Divider, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import TweetList from '../../component/TweetList/TweetList'
import useStyles from '../Styles'
import Header from '../../component/Header/Header'
import { Person } from '@material-ui/icons'
import { getTweetsByUserReqest } from '../../api/api_tweet'
import { setTweetList, useTweetDispatch, useTweetState } from '../../conext/TweetContext'
import { toast } from 'react-toastify'

const TweetsByUser = (props) => {

    const {tweetList:tweets} = useTweetState()
    const tweetDispatch = useTweetDispatch()

    useEffect(()=>{
        getTweetsByUserReqest(props.match.params.id,(isOk,data)=>{
            if(!isOk)
                return toast.error(data);
            else setTweetList(tweetDispatch,data)
        })
    },[])

    const classes = useStyles()
    return (
        <div>
            
            <Header icon={<Person/>} title={props.match.params.name} />
            <Divider className={classes.divder}/>
            {tweets.length === 0 &&
                <Typography>این کاربر توییتی نکرده است.</Typography>
            }
            <TweetList data={tweets}/>
        </div>
    )
}

export default TweetsByUser