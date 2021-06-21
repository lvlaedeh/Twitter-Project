import React from 'react'
import useStyles from './styles'
import RightSidbar from '../RightSidbar/RightSidbar'
import Divider from '@material-ui/core/Divider'

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <RightSidbar/>
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.mainPart}>
                main
            </div>
            <div className={classes.leftSidbar}>
                leftSidbar
            </div>
        </div>
    )
}

export default Layout
