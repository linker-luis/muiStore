import { createTheme } from "@mui/material"
// #845EC2
// #D65DB1
// #FF6F91
// #FF9671
// #FFC75F
// #F9F871

export const myColors = {
    primary: "#845EC2",
    secondary: "#D65DB1",
    success: "#FF6F91",
    info: "#FF9671",
    danger: "#FFC75F",
    warning: "#F9F871",
    white: '#fff',
    black: '#000',
    bodyColor: '#f1f1f1'
}

export const theme = createTheme({
    palette: {
        primary: {
            main: myColors.primary,
        },
        secondary: {
            main: myColors.secondary
        },
        white: {
            main: myColors.white
        }
    }
})