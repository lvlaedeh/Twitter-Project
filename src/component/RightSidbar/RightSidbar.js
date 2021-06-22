import React from 'react'

import useStyles from './styles'
import { Grid , Typography , ButtonBase} from '@material-ui/core'

const hashtag = [
    "هلو_سامر",
    "سامسونگ",
    "جاوااسکریپت",
    "هلو_سامر",
    "سامسونگ",
    "جاوااسکریپت",
]
const RightSidbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} >
                <Grid item>
                    <img src={"images/logo.png"}/>
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
                    <Grid item container>
                        <img src={'images/hashtag.png'} />
                        <Typography className={classes.hashtag}>
                            {item}
                        </Typography>
                    </Grid>
                </ButtonBase>)
                }
            </Grid>    
        </div>
    )
}

export default RightSidbar
