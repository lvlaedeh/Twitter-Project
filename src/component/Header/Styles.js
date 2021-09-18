import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  header: {
      display: 'flex',
      padding: '18px',
  },
  headerTitle: {
      fontWeight: 600,
      fontSize: "1.2rem",
      marginRight: '0.4rem',
  },

}))

export default useStyles