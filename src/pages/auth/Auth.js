import { Typography , Tabs, Tab, Paper, Input, Button } from '@material-ui/core'
import React, { useState} from 'react'
import useStyles from './Styles'
import {toast} from 'react-toastify'
import { loginApi, registerApi } from '../../api/api-auth'
import { useTranslation } from 'react-i18next'

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const Auth = () => {

    const classes = useStyles()
    const {t} = useTranslation()

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
            return t("validate.username")
        if(!user.password)
            return t("validate.password")
    }

    const validateRegister = (user) => {
        if(!user.name)
            return t("validate.fullName")
        if(!user.username)
            return t("validate.username")
        if(!user.password)
            return t("validate.password")
        if(user.password !== user.confPassword)
            return t("validate.confPassword")
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
            toast.success(t("success.login"))
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
            window.location.reload()
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
            toast.success(t("success.register"))
            localStorage.setItem("name",data.name)
            localStorage.setItem("image",data.image)
            localStorage.setItem("username",data.username)
            localStorage.setItem("x-auth-token",data["x-auth-token"])
            window.location.reload()
        })
    }

    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText} >{t("welcome")}</Typography>
            <Tabs
                value={tab}
                onChange={handleChangeTab}
                aria-label="wrapped label tabs example"
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <Tab value={LOGIN_TAB_VALUE} label={t("tab.login")} className={classes.tab} />
                <Tab value={REG_TAB_VALUE} label={t("tab.register")} className={classes.tab} />
            </Tabs>
            {tab === LOGIN_TAB_VALUE && 
                <div className={classes.containerInput}>
                    <Typography>{t("label.username")}</Typography>
                    <Input value={usernameLogin} onChange={(e)=>setUsernameLogin(e.target.value)}  className={"uni_m_b_small"}></Input>
                    <Typography>{t("label.password")}</Typography>
                    <Input value={passwordLogin} onChange={(e)=>setPasswordLogin(e.target.value)} className={"uni_m_b_small"}></Input>
                    <Button variant={"contained"} onClick={handleLogin} color="primary">{t("btn.login")}</Button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
            <div className={classes.containerInput}>
                <Typography>{t("label.fullName")}</Typography>
                <Input value={fullNameRegister} onChange={(e)=>setFullNameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>{t("label.username")}</Typography>
                <Input value={usernameRegister} onChange={(e)=>setUsernameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>{t("label.password")}</Typography>
                <Input value={passwordRegister} onChange={(e)=>setPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Typography>{t("label.confPassword")}</Typography>
                <Input value={confPasswordRegister} onChange={(e)=>setConfPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
                <Button onClick={handleRegister} variant={"contained"} color="primary">{t("btn.register")}</Button>
            </div>  
            }
        </Paper>
    )
}

export default Auth
