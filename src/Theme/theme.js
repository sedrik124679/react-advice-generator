import {createTheme} from "@mui/material";

const dividerColor = '#ffffff'
const subTitle1 = 'rgba(207, 228, 233)'
const subTitle2 = '#76d07d';
const iconBackground = '#ab7bee';
const white = '#ffffff';
const hoverColor = '#76e5d0';

const fontSize = '1rem';
const descrFontSize = '1.6rem';
const fontWeight = 800;

export const theme = createTheme({
    palette: {
        background: {
            paper: 'rgba(49, 59, 71)',
            iconButton: iconBackground,
        },
        divider: dividerColor,

        primary: {
            main: white
        },
        diceColor: {
          main: '#000000',
        },
        iconColor: {
          main: hoverColor,
        },
        mode: 'light',
        action: {
            hover: hoverColor,
        }
    },
    typography: {
        fontFamily: 'Hubballi',
        subtitle1: {
            color: subTitle1,
            backgroundColor: 'inherit',
            fontSize: descrFontSize,
            fontWeight: fontWeight,
        },
        subtitle2: {
            backgroundColor: 'inherit',
            color: subTitle2,
            fontSize: fontSize,
            fontWeight: fontWeight,
        }
    },
})