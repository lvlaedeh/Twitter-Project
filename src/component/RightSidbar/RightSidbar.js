import React from 'react'

import useStyles from './styles'
import { Grid , Typography } from '@material-ui/core'

const RightSidbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} >
                <Grid item>
                    <img src={"images/logo.png"}/>
                </Grid>
                <Grid item>
                    <Typography>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
                
        </div>
    )
}

export default RightSidbar
