import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  newTweet: {
    background: '#fff',
    padding: '18px',
    display: 'flex',
    flexDirection: 'column',
},
input: {
    border: 'none',
    flex: 1,
    marginRight: '1rem',
    "&:focus" : {
        outline : "unset"
    },
},
newTweetImage:{
    width: 50,
    height: 50,
     borderRadius: '50%' 
},
newTweetButton: {
    color: '#fff',
    fontFamily: 'Shabnam',
    borderRadius: '1rem',
    lineHeight: '1rem',
    minHeight: '30px',
    height: '30px',
    minWidth: '30px',
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
tweetImg: {
    backgroundSize: 'contain',
    width: '20rem',
    height: '20rem',
    marginTop: '1rem',
    backgroundRepeat:" no-repeat"
}

}))

export default useStyles