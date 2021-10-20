import { Divider } from '@material-ui/core'
import React, { useEffect } from 'react'
import Header from '../../component/Header/Header'
import NewTweet from '../../component/NewTweet/NewTweet'
import TweetList from '../../component/TweetList/TweetList'
import useStyles from '../Styles'
import HouseIcon from '@material-ui/icons/House';
import { getAllTweets } from '../../api/api_tweet'
import { toast } from 'react-toastify'
import { setTweetList as setTweets ,useTweetDispatch,useTweetState } from '../../conext/TweetContext'

const Home = () => {

    const {tweetList: tweets} = useTweetState()
    const tweetDispatch = useTweetDispatch()

    useEffect(()=>{
        getAllTweets((isOk,data)=>{
            if(!isOk)
                return toast.error(data.message);
            else setTweets(tweetDispatch,data)
        })
    },[])


    const classes = useStyles()
    return (
        <div>
            <Header icon={<HouseIcon/>} title={"خانه"}/>
            <Divider className={classes.divder}/>
            <NewTweet />
            <TweetList data={tweets}/>
        </div>
    )
}

export default Home
