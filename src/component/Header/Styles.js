import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  header: {
    background: '#fff',
    display: 'flex',
    padding: '18px',
  },
  headerTitle: {
      fontWeight: 600,
      fontSize: "1.2rem",
      marginRight: '0.4rem',
  },
  menuIcon: {
    padding: 0,
    marginLeft : "0.5rem"
  }

}))

export default useStyles