import React from 'react'
import useStyles from './styles'
import RightSidbar from '../RightSidbar/RightSidbar'
import Divider from '@material-ui/core/Divider'
import LeftSidbar from '../LeftSidbar/LeftSidbar'
import Home from '../../pages/Home/Home'

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <RightSidbar/>
            <Divider orientation={"vertical"} className={classes.divider} />
            <Home/>
            <Divider orientation={"vertical"} className={classes.divider} />
            <LeftSidbar/>
        </div>
    )
}

export default Layout
