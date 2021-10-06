import { Typography , Tabs, Tab, Paper, Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './Styles'
import {toast} from 'react-toastify'
import { loginApi, registerApi } from '../../api/api-auth'

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const Auth = () => {
    const classes = useStyles()

    const [tab,setTab] = useState(LOGIN_TAB_VALUE)

    const [usernameLogin,setUsernameLogin] = useState()
    const [passwordLogin,setPasswordLogin] = useState()

    const [fullNameRegister,setFullNameRegister] = useState()
    const [usernameRegister,setUsernameRegister] = useState()
    const [passwordRegister,setPasswordRegister] = useState()
    const [confPasswordRegister,setConfPasswordRegister] = useState()

    const handleChangeTab = (e,newValue)=> {
        setTab(newValue)
    }

    const validateLogin = (user) => {
        if(!user.username)
            return " حتما یوزرنیم را وارد کنید"
        if(!user.password)
            return " حتما پسورد را وارد کنید"
    }

    const validateRegister = (user) => {
        if(!user.name)
            return " حتما نام کامل خود را وارد کنید"
        if(!user.username)
            return " حتما یوزرنیم را وارد کنید"
        if(!user.password)
            return " حتما پسورد را وارد کنید"
        if(user.password !== user.confPassword)
            return " پسورد شما باهم یکسان نیست"
    }


    const handleLogin = () => {
        const user = {
            username : usernameLogin,
            password: passwordLogin,
        }
        const error = validateLogin(user)
        if(error)
            return toast.warn(error)
        loginApi(user,(isOk,data)=>{
            if(!isOk)
                return toast.error(data);
            toast.success("شما با موفقیت وارد شدید")
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
        })
    }

    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username : usernameRegister,
            password: passwordRegister,
            confPassword: confPasswordRegister,
        }
        const error = validateRegister(user)
        if(error)
            return toast.warn(error)
        user.confPassword = undefined
        registerApi(user,(isOk,data)=>{
            if(!isOk)
                return toast.error(data);
            toast.success("شما با موفقیت ثبت نام شدید")
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
        })
    }

    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText} >به توییتر فارسی خوش آمدید</Typography>
            <Tabs
                value={tab}
                onChange={handleChangeTab}
                aria-label="wrapped label tabs example"
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <Tab value={LOGIN_TAB_VALUE} label="ورود" className={classes.tab} />
                <Tab value={REG_TAB_VALUE} label="ثبت نام" className={classes.tab} />
            </Tabs>
            {tab === LOGIN_TAB_VALUE && 
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input value={usernameLogin} onChange={(e)=>setUsernameLogin(e.target.value)}  className={"uni_m_b_small"}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Button variant={"contained"} onClick={handleLogin} color="primary">ورود</Button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
            <div className={classes.containerInput}>
                <Typography>نام کامل</Typography>
                <Input value={fullNameRegister} onChange={(e)=>setFullNameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>نام کاربری</Typography>
                <Input value={usernameRegister} onChange={(e)=>setUsernameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>رمز عبور</Typography>
                <Input value={passwordRegister} onChange={(e)=>setPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>تکرار رمز عبور</Typography>
                <Input value={confPasswordRegister} onChange={(e)=>setConfPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Button onClick={handleRegister} variant={"contained"} color="primary">ثبت نام</Button>
            </div>  
            }
        </Paper>
    )
}

export default Auth
