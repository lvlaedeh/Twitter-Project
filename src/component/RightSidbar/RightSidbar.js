import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { Grid , Typography , ButtonBase} from '@material-ui/core'
import { getHashTags } from '../../api/api_tweet'

const RightSidbar = (props) => {

    const [hashtag,setHashtag] = useState([])

    useEffect(()=>{
        getHashTags((isOk,data)=>{
            if(!isOk)
                return alert(data.massege);
            else setHashtag(data)
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
                {hashtag.map(item => <ButtonBase className={classes.hashtagParent}>
                    <Link to={"/hashtags/"+item} style={{width: '100%'}}>
                        <Grid item container>
                            <img src={'/images/hashtag.png'} />
                            <Typography className={classes.hashtag}>
                                {item}
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
