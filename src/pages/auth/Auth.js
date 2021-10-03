import { Typography , Tabs, Tab, Paper, Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './Styles'


const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const Auth = () => {
    const classes = useStyles()
    const [tab,setTab] = useState(LOGIN_TAB_VALUE)

    const handleChangeTab = (e,newValue)=> {
        setTab(newValue)
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
                    <Input className={"uni_m_b_small"}></Input>
                    <Typography>رمز عبور</Typography>
                    <Input className={"uni_m_b_small"}></Input>
                    <Button variant={"contained"} color="primary">ورود</Button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
            <div className={classes.containerInput}>
                <Typography>نام کامل</Typography>
                <Input className={"uni_m_b_small"}></Input>
                <Typography>نام کاربری</Typography>
                <Input className={"uni_m_b_small"}></Input>
                <Typography>رمز عبور</Typography>
                <Input className={"uni_m_b_small"}></Input>
                <Typography>تکرار رمز عبور</Typography>
                <Input className={"uni_m_b_small"}></Input>
                <Button variant={"contained"} color="primary">ثبت نام</Button>
            </div>  
            }
        </Paper>
    )
}

export default Auth
