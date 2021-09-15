import { Divider } from '@material-ui/core'
import React from 'react'
import Header from './compnent/Header/Header'
import NewTweet from './compnent/NewTweet/NewTweet'
import useStyles from './Styles'


const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divder}/>
            <NewTweet/>
        </div>
    )
}

export default Home
