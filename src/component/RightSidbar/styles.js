import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    width: '18%',
    padding : '1.5rem 1rem'
  },
  logoType : {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important' ,
    marginRight: '1rem !important',
    color: theme.palette.primary.main
  },
  hashtagTitle: {
    fontWeight : '600 !important',
    fontSize: '1.1rem !important',
    marginTop: '3rem !important',
    marginBottom : '1.5rem !important'
  },
  hashtag:{
    marginRight: '0.8rem !important',
  },
  hashtagParent : {
    marginBottom : '0.5rem !important',
    padding:'0.15rem !important',
    width: '100%',

  }
}));

export default useStyles