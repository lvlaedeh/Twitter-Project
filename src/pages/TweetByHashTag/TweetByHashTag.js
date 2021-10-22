import { Divider } from '@material-ui/core'
import React , {useEffect} from 'react'
import TweetList from '../../component/TweetList/TweetList'
import useStyles from '../Styles'
import Header from '../../component/Header/Header'
import { getTweetsByHashtagReqest } from '../../api/api_tweet'
import { setTweetList, useTweetDispatch, useTweetState } from '../../conext/TweetContext'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'

const TweetByHashTag = (props) => {

    const {tweetList:tweets} = useTweetState()
    const tweetDispatch = useTweetDispatch()
    const location = useLocation()

    useEffect(()=>{
        
        getTweetsByHashtagReqest(props.match.params.hashtag,(isOk,data)=>{
            if(!isOk)
                return toast.error(data);
            else setTweetList(tweetDispatch,data)
        })
    },[location])

    const classes = useStyles()
    return (
        <div>
            <Header icon={<img src={'/images/hashtag.png'} />} title={props.match.params.hashtag} />
            <Divider className={classes.divder}/>
            <TweetList data={tweets}/>
        </div>
    )
}

export default TweetByHashTag
