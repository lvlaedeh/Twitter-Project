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
        body1:{
            fontFamily: "Shabnam " ,
            fontSize: '1.2rem'
        }
    },
    MuiButton: {
        label: {
            fontFamily: "Shabnam !important",
            color: '#fff' ,
            fontSize: '1rem'
        }
    }
}

})
export default Theme