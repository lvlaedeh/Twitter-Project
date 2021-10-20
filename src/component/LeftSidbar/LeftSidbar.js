import { Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { uploadUserPhoto } from '../../api/api-auth'
import { getUser } from '../../api/api_tweet'
import { useStyles } from './style'
import Tweeter from './tweeter/tweeter'

const LeftSidbar = () => {

    const [user,setUser] = useState([])
    const inputRef = useRef()
    const [imageFile,setImageFile] = useState()
    const [imagePath,setImagePath] = useState()

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=>{
        getUser((isOk,data)=>{
            if(!isOk)
                return toast.error(data.massege);
            else setUser(data)
        })
    },[])

    const getImage = () => {
        if(imagePath)
            return imagePath
        if(localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image")
        return "/images/user-profiles.png"
    }

    const handleAvatorChange = (e) => {
        if(e.target.files && e.target.files.length > 0)
            setImageFile(e.target.files[0])

            const reader = new FileReader()
            reader.onload = (e) =>{
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
            const formData = new FormData()
            formData.append("image",e.target.files[0]);
        uploadUserPhoto(formData,(isOk,data)=>{
            if(!isOk)
                return toast.error(data)
            toast.success("عکس شما با موفقیت آپلود شد")
            localStorage.setItem("image",data.imagePath)
        })
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid onClick={handleClick} container direction={"row-reverse"} style={{cursor: 'pointer'}}>
                <img src={getImage()} style={{width: 50 , height: 50 , borderRadius: '50px'}} />
                <Grid item container direction={"column"} className={classes.proftext} >
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <input ref={inputRef} type="file" style={{display:"none"}} onChange={handleAvatorChange} />
            </Grid>
            <Grid container direction="column" className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}> بهترین خبرنگاران</Typography>
                <Divider style={{margin: '0 -24px'}} />
                {user.map((item,index)=>{
                return(
                    <>
                    
                        <Link to={"/users/"+item.name} style={{width: '100%'}} >
                            <Tweeter name={item.name} id={item.username} image={item.image} />
                        </Link>
                        {index!==user.length-1 &&
                        <Divider style={{margin: '0 -24px'}}/>}
                    </>
                )})}
            </Grid>
            <Menu elevation={0}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} 
                anchorEl={anchorEl} 
                open={open} 
                onClose={handleClose}>
                <MenuItem onClick={()=> inputRef.current.click()}>آپلود عکس پروفایل </MenuItem>
                <MenuItem onClick={()=> { 
                    localStorage.clear(); 
                    window.location.reload()
                    }} >خروج</MenuItem>
            </Menu>
        </div>
    )
}

export default LeftSidbar
