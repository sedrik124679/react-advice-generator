import {useTheme} from "@mui/material";
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

export default function GlobalStyles() {
    const theme = useTheme()

    return (
        <GlobalThemeStyles
            styles={{
                '*': {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                '#root': {
                    background: 'rgb(35,39,49)',
                }
            }}
        />
    )
}