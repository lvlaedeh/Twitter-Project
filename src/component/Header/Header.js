import React from 'react'
import { IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Styles';
import { toggleDrawer, useLayoutDispatch } from '../../conext/LayloutContext';

const Header = ({title,icon}) => {

    const classes = useStyles()
    const theme = useTheme()
    const isTableSize = useMediaQuery(theme.breakpoints.down("sm"))
    const layoutDispatch = useLayoutDispatch()

    return (
        <div className={classes.header}>
            {isTableSize && <IconButton onClick={()=>{toggleDrawer(layoutDispatch)}} className={classes.menuIcon}> 
                                <MenuIcon/> 
                            </IconButton>}
            {icon}
            <Typography className={classes.headerTitle}>{title}</Typography>
        </div>
    )
}

export default Header
