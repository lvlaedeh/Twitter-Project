import React from 'react'
import useStyles from './styles'
import RightSidbar from '../RightSidbar/RightSidbar'
import Divider from '@material-ui/core/Divider'
import LeftSidbar from '../LeftSidbar/LeftSidbar'
import Home from '../../pages/Home/Home'
import TweetByHashTag from '../../pages/TweetByHashTag/TweetByHashTag'

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <RightSidbar/>
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.content}>
               <TweetByHashTag/>
            </div>
            <Divider orientation={"vertical"} className={classes.divider} />
            <LeftSidbar/>
        </div>
    )
}

export default Layout
