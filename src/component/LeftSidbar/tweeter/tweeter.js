import { ButtonBase, Grid , Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../LeftSidbar-css'

const Tweeter = ({name,id,image}) => {

    const classes = useStyles()

    return (
        <ButtonBase>
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <img src={image} style={{width: '50px'}} />
            <Grid item container direction={"column"} className={classes.tweetText} >
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
        </Grid>
        </ButtonBase>
    )
}

export default Tweeter
