import { Divider } from '@material-ui/core'
import React from 'react'
import TweetList from '../../component/TweetList/TweetList'
import useStyles from '../Styles'
import Header from '../../component/Header/Header'
import { Link } from 'react-router-dom'

const tweets = [{
    sender:{
        name: 'maedeh doabi',
        id: '@maedeh_doabi',
        img: '/images/samsung.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی #صبحانه ست چون کسی مجبورت نمیکنه خورشت #کرفس یخوری",
    liked: 116,
},
{
    sender:{
        name: 'سیامک کوه دره',
        id: '@kooooooh',
        img: '/images/koooh_user.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 34,
},
{
    sender:{
        name: 'maedeh doabi',
        id: '@maedeh_doabi',
        img: '/images/samsung.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 457,
},
{
    sender:{
        name: 'maedeh doabi',
        id: '@maedeh_doabi',
        img: '/images/samsung.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 116,
},
{
    sender:{
        name: 'سیامک کوه دره',
        id: '@kooooooh',
        img: '/images/koooh_user.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 56,
},
{
    sender:{
        name: 'maedeh doabi',
        id: '@maedeh_doabi',
        img: '/images/samsung.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 676,
},
{
    sender:{
        name: 'سیامک کوه دره',
        id: '@kooooooh',
        img: '/images/koooh_user.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 568,
},
{
    sender:{
        name: 'maedeh doabi',
        id: '@maedeh_doabi',
        img: '/images/samsung.png'
    },
    text: "بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری کسی هم درست نمیکنه بهترین وعده غذایی صبحانست چون کسی مجبورت نمیکنه خورشت کرفس یخوری",
    liked: 90,
},
]

const TweetByHashTag = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Header icon={<img src={'/images/hashtag.png'} />} title={props.match.params.hashtag} />
            <Divider className={classes.divder}/>
            <TweetList data={tweets}/>
        </div>
    )
}

export default TweetByHashTag
