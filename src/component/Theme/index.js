import { createMuiTheme } from "@material-ui/core";
import tinyColor from 'tinycolor2'

const colorPrimery = '#5ea9dd'

const Theme = createMuiTheme({
palette:{
    primary :{
        main: colorPrimery,
        light : tinyColor(colorPrimery).lighten().toHexString()
    },
},
overrides:{
    MuiTypography : {
        root:{
            fontFamily: "Shabnam !important",
        }
    }
}
})
export default Theme