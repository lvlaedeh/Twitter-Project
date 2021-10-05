import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../api/api_tweet'
import { useStyles } from './style'
import Tweeter from './tweeter/tweeter'

const LeftSidbar = () => {

    const [user,setUser] = useState([])

    useEffect(()=>{
        getUser((isOk,data)=>{
            if(!isOk)
                return alert(data.massege);
            else setUser(data)
        })
    },[])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"/images/user img.png"} style={{width: 'max-content'}} />
                <Grid item container direction={"column"} className={classes.proftext} >
                    <Typography className={classes.profName}>محمد مطواعی</Typography>
                    <Typography className={classes.profId}>Mohammad.matvayi</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}> بهترین خبرنگاران</Typography>
                <Divider style={{margin: '0 -24px'}} />
                {user.map((item,index)=>{
                return(
                    <>
                    
                        <Link to={"/users/"+item.name} style={{width: '100%'}} >
                            <Tweeter name={item.name} id={item.id} image={item.img} />
                        </Link>
                        {index!==user.length-1 &&
                        <Divider style={{margin: '0 -24px'}}/>}
                    </>
                )})}
            </Grid>
        </div>
    )
}

export default LeftSidbar
