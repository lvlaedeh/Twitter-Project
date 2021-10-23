import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import RightSidbar from '../RightSidbar/RightSidbar'
import LeftSidbar from '../LeftSidbar/LeftSidbar'
import { getProfileReqest } from '../../api/api-auth'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import { Divider, CircularProgress, Typography } from '@material-ui/core'

const Layout = (props) => {

    const [wait,setWait] = useState(true)
    const classes = useStyles()
    const history = useHistory()

    useEffect(()=>{
        getProfileReqest((isOk,data)=>{
            if(!isOk){
                toast.error(data)
                localStorage.clear();
                return history.push("/login")
            }
            setWait(false)
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
        
        })
    },[])

    if(wait)
        return (<div className={classes.wait}>
                    <CircularProgress className={"uni_m_b_small"} />
                    <Typography>شکیبا باشید</Typography>
                </div>
        )
    return (
        <div className={classes.root}>
            <RightSidbar/>
            <Divider orientation={"vertical"} className={classes.divider} />
            <div className={classes.content}>
               {props.children}
            </div>
            <Divider orientation={"vertical"} className={classes.divider} />
            <LeftSidbar/>
        </div>
    )
}

export default Layout
