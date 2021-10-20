import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles'
import Favorite from '@material-ui/icons/Favorite';
import { setTweetText, useTweetDispatch } from '../../conext/TweetContext';



const Tweet = ({data}) => {

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g , "<span style='color:blue'>$&</span>")};
    }

    const classes = useStyles()
    const tweetDispatch = useTweetDispatch()

    const getImage = () => {
        if(data.user.image)
            return data.user.image
        else return "/images/person.png"
    }

    const retweetClick = () => {
        setTweetText(tweetDispatch,data.text)
    }

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} className={classes.tweetImage} />
                <Grid item container direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid item container>
                        <Typography className={classes.tweetName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetId}>{data.user.id}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"}></Typography>
                        {data.image &&
                            <div>
                                <div style={{backgroundImage: `url(${data.image})`}} className={classes.tweetImg}></div>
                            </div>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem', alignItems: 'center'}}>
            <IconButton className={classes.newTweetImgBtn} onClick={retweetClick} >
                    <img src={'/images/retweet.png'} className={classes.newTweetImg}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <Favorite className={classes.tweetImgLike}/>
                </IconButton>
                <Typography className={classes.likedCount}>{data.likes}</Typography>
            </Grid>
        </div>
    )
}

export default Tweet
