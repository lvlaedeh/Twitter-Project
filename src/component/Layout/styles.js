import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: '#ffffff',
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
  content: {
    flex: 1,
    overflowY: 'auto',
  },
  wait: {
    width: "100%",
    height: "100vh",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default useStyles