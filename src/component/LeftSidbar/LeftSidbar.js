import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'
import Tweeter from './tweeter/tweeter'

const tweeter = [
    {
        name: 'Xiaomi',
        id: '@Xiaomi',
        img: '/images/xiaomi.png'
    },
    {
        name: 'Samsung',
        id: '@samsung',
        img: '/images/samsung.png'
    },
    {
        name: 'بیل گیتس',
        id: '@BillGates',
        img: '/images/bil.png'
    },
    {
        name: 'مایک بای',
        id: '@Mike_IMC',
        img: '/images/mike.png'
    },
    {
        name: '!شرلی ونگ',
        id: '@ُShirley_IMC',
        img: '/images/shily.png'
    },
]

const LeftSidbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"/images/user img.png"} style={{width: 'max-content'}} />
                <Grid item container direction={"column"} className={classes.proftext} >
                    <Typography className={classes.profName}>محمد مطواعی</Typography>
                    <Typography className={classes.profId}>Mohammad.matvayi</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}> بهترین خبرنگاران</Typography>
                <Divider style={{margin: '0 -24px'}} />
                {tweeter.map((item,index)=>{
                return(
                    <>
                    
                        <Link to={"/users/"+item.name} style={{width: '100%'}} >
                            <Tweeter name={item.name} id={item.id} image={item.img} />
                        </Link>
                        {index!==tweeter.length-1 &&
                        <Divider style={{margin: '0 -24px'}}/>}
                    </>
                )})}
            </Grid>
        </div>
    )
}

export default LeftSidbar
