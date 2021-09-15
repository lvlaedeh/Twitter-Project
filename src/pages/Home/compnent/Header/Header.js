import React from 'react'
import HouseIcon from '@material-ui/icons/House';
import { Typography } from '@material-ui/core';
import useStyles from '../../Styles';

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <HouseIcon/>
            <Typography className={classes.headerTitle}>خانه</Typography>
        </div>
    )
}

export default Header
