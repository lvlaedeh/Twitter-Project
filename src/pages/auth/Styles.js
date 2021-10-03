import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  container:{
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    margin: '10rem auto',
    paddingTop: '1rem',
    width: '32rem',
    borderRadius: '10px'
  },
  headerText: {
    alignSelf: 'center',
    margin: '1rem',
    fontWeight: 'bold'
  },
  tab: {
    fontFamily: 'shabnam',
    marginTop: '1rem',
    fontSize: '1rem',
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0.8rem'
  }
}))

export default useStyles