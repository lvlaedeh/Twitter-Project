import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { Grid , Typography , ButtonBase} from '@material-ui/core'
import { getHashTags } from '../../api/api_tweet'
import { toast } from 'react-toastify'
import { useTweetDispatch, useTweetState, setHashTagList as setHashtag } from '../../conext/TweetContext'

const RightSidbar = () => {

    const {hashTag} = useTweetState()
    const tweetDispatch = useTweetDispatch()

    useEffect(()=>{
        getHashTags((isOk,data)=>{
            if(!isOk)
                return toast.error(data.massege);
            else setHashtag(tweetDispatch,data)
        })
    },[])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Link to={"/"}>
            <Grid container alignItems={'center'} >
                <Grid item>
                    <img src={"/images/logo.png"}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.logoType} >
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagTitle}>
                     داغ ترین هشتگ ها
            </Typography>
            <Grid container direction="column" alignItems={'center'}>
                {hashTag.map(item => <ButtonBase className={classes.hashtagParent}>
                    <Link to={"/hashtags/"+item.text} style={{width: '100%'}}>
                        <Grid item container>
                            <img src={'/images/hashtag.png'} />
                            <Typography className={classes.hashtag}>
                                {item.text}
                            </Typography>                       
                        </Grid>
                    </Link>
                </ButtonBase>)
                }
            </Grid> 
            </Link>   
        </div>
    )
}

export default RightSidbar
