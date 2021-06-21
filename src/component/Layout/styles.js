import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
  },
  divider: {
    height : '100%' ,
    width : 1,
    backgroundColor : "#7ebaff !important",
    filter : "opacity(0.5)"
  },
  leftSidbar:{
    width: '25%',
  },
  mainPart: {
    flex: 1,
  }
});

export default useStyles