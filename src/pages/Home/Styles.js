import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    flex: 1,
  },
  header: {
      display: 'flex',
      padding: '18px',
  },
  headerTitle: {
      fontWeight: 600,
      fontSize: "1.2rem",
      marginRight: '0.4rem',
  },
  divider: {
      backgroundColor: '#7ebaff',
      filter: 'opacity(1.4)',
  },
  newTweet: {
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
  }
}))

export default useStyles