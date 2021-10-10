import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  newTweet: {
    background: '#fff',
    padding: '18px',
    display: 'flex',
    flexDirection: 'column',
},
tweetImage:{
  width: 50,
  height: 50,
  borderRadius: '50%'
},
  newTweetImg: {
    width: 'max-content',
    height: '1.5rem',
    padding: '0.2rem',
    border: '0.5px solid #3337',
    borderRadius: '50%',
    marginLeft: '0.8rem',
},
newTweetImgBtn: {
    padding: 'unset',
},
  tweetName: {
    font: 600,
    marginLeft: '0.5rem'
},
tweetId: {
    color: theme.palette.text.hint
},
tweetImg: {
  color: 'red',
  width: 'max-content',
    height: '1.5rem',
    padding: '0.2rem',
    border: '0.5px solid #3337',
    borderRadius: '50%',
    marginLeft: '0.8rem',
},
tweetText: {
    marginTop: '1.3rem',
    fontSize: '0.9rem'
},
likedCount: {
    marginLeft: '0.5rem'
},

}))

export default useStyles