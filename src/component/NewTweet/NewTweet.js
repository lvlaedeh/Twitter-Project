import { Button, Grid, IconButton } from '@material-ui/core'
import useStyles from './Styles'
import React , {useState} from 'react'
import { newTweetReqest } from '../../api/api_tweet'


const NewTweet = () => {

    const [newTweet,setNewTweet] = useState("")

    const submitNewTweet = () => {
        if(!newTweet)
            return;
        const data = {
            id : Math.floor(Math.random()*1000),
            "sender":{
                "name": "سیامک کوه دره",
                "id": "@kooooooh",
                "img": "/images/koooh_user.png"
            },
            "text": newTweet,
            "liked": 568
        }
        newTweetReqest(data,(isOk)=>{
            if(!isOk)
                return alert("dont send")
            alert('be send')
        })
    }

    const classes = useStyles()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"images/user img.png"} style={{width: 'max-content'}} />
                <input  value={newTweet} onChange={(e)=> setNewTweet(e.target.value)} placeholder="توییت کن..." className={classes.input}/>
            </Grid> 
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}}>
                <Button variant={'contained'} color={'primary'} onClick={submitNewTweet} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={'./images/tweetpic.png'} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweet
