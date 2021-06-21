import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
overrides:{
    MuiTypography : {
        root:{
            fontFamily: "Shabnam !important",
            fontSize : "2rem !important",
        }
    }
}
})
export default Theme