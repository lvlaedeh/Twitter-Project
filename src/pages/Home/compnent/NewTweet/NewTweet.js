import { Button, Grid, IconButton } from '@material-ui/core'
import useStyles from '../../Styles'
import React from 'react'


const NewTweet = () => {
    const classes = useStyles()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"images/user img.png"} style={{width: 'max-content'}} />
                <textarea placeholder="توییت کن..." className={classes.input}/>
            </Grid> 
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}}>
                <Button variant={'contained'} color={'primary'} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={'./images/tweetpic.png'} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweet
