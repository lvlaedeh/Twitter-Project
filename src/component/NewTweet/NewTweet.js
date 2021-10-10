import { Button, Grid, IconButton } from '@material-ui/core'
import useStyles from './Styles'
import React , {useState} from 'react'
import { newTweetReqest } from '../../api/api_tweet'
import { toast } from 'react-toastify'


const NewTweet = ({uploadTweets}) => {
    
    const [newTweet,setNewTweet] = useState()

    const submitNewTweet = () => {
        const formData = new FormData()
        formData.append("text",newTweet)
        formData.append("image",getImage())
        newTweetReqest(formData,(isOk,response)=>{
            if(!isOk)
                return toast.error(response)
            toast.success('توییت شما ارسال شد')
            uploadTweets()
            setNewTweet("")
        })
    }

    const getImage = () => {
        if(localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image")
        return "/images/person.png"
    }
    

    const classes = useStyles()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} className={classes.newTweetImage} />
                <input  value={newTweet} onChange={(e)=> setNewTweet(e.target.value)} placeholder="توییت کن..." className={classes.input}/>
            </Grid> 
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}}>
                <Button disabled={!newTweet} variant={'contained'} color={'primary'} onClick={submitNewTweet} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={'./images/tweetpic.png'} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweet
