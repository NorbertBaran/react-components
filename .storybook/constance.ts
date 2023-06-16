import {createTheme} from "@mui/material";
import {indigo} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: indigo,
        secondary: {main: '#fff', contrastText: '#757575'}
    },
    typography: {
        fontFamily: `'Roboto', sans-serif`,
    },
})

export const paths = {
    home: '/',
    signin: '/signin',
    signup: '/signup',
    restore: '/restore'
}