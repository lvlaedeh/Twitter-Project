import { Button, Grid, IconButton } from '@material-ui/core'
import useStyles from './Styles'
import React , {useRef, useState} from 'react'
import { newTweetReqest } from '../../api/api_tweet'
import { toast } from 'react-toastify'


const NewTweet = () => {
    
    const [newTweet,setNewTweet] = useState()
    const inputFile = useRef()
    const [imageFile,setImageFile] = useState()
    const [imagePath,setImagePath] = useState()

    const submitNewTweet = () => {
        const formData = new FormData()
        formData.append("text",newTweet)
        if(imageFile)
            formData.append("image",imageFile)
        newTweetReqest(formData,(isOk,response)=>{
            if(!isOk)
                return toast.error(response)
            toast.success('توییت شما ارسال شد')
            setNewTweet("")
        })
    }

    const getImage = () => {
        if(localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image")
        return "/images/person.png"
    }
    
    const setInputClick = () => {
        inputFile.current.click()
    }

    const onChangeImg = (e) => {
        if(e.target.files && e.target.files.length > 0)
            setImageFile(e.target.files[0])

            const reader = new FileReader()
            reader.onload = (e) =>{
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
    }

    const classes = useStyles()
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} className={classes.newTweetImage} />
                <input  value={newTweet} onChange={(e)=> setNewTweet(e.target.value)} placeholder="توییت کن..." className={classes.input}/>
                <input type={"file"} style={{display: "none"}} ref={inputFile} onChange={onChangeImg} />
            </Grid> 
            { imagePath &&
                <div>
                    <div style={{backgroundImage: `url(${imagePath})`}} className={classes.tweetImg}></div>
                </div>
            }
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}}>
                <Button disabled={!newTweet} variant={'contained'} color={'primary'} onClick={submitNewTweet} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={'./images/tweetpic.png'} onClick={setInputClick} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweet
