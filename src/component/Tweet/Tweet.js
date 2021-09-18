import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles'
import Favorite from '@material-ui/icons/Favorite';

const Tweet = ({data}) => {
    const classes = useStyles()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={data.sender.img} style={{height: 'max-content'}} />
                <Grid item container direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid item container>
                        <Typography className={classes.tweetName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetId}>{data.sender.id}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.tweetText}>{data.text}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem', alignItems: 'center'}}>
            <IconButton className={classes.newTweetImgBtn}>
                    <img src={'./images/retweet.png'} className={classes.newTweetImg}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <Favorite className={classes.tweetImg}/>
                </IconButton>
                <Typography className={classes.likedCount}>{data.liked}</Typography>
            </Grid>
        </div>
    )
}

export default Tweet
