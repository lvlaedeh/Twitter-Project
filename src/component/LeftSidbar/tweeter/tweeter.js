import { ButtonBase, Grid , Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../style'

const Tweeter = ({name,id,image}) => {

    const classes = useStyles()

    const getImage = () => {
        if(image)
            return image
        return "/images/person.png"
    }

    return (
        <ButtonBase style={{width: '100%'}}>
        <Grid container direction={"row"} className={classes.tweeterParent}>
            <img src={getImage()} style={{width: '50px',borderRadius: '50%'}} />
            <Grid item container direction={"column"} alignItems={'flex-start'} className={classes.tweetText} >
                <Typography className={classes.profName}>{name}</Typography>
                <Typography className={classes.profId}>{id}</Typography>
            </Grid>
        </Grid>
        </ButtonBase>
    )
}

export default Tweeter
