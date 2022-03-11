import {theme} from "../../Theme/theme";

export const cardStyles = {
    cardContainer: {
        width: {lg: '50%', md: '60%', sm: '80%', xs: '100%'},
        margin: '0 auto',
        textAlign: 'center',
        borderRadius: 8,
        padding: '30px'
    },
    cardButton: {
        '&:hover': {backgroundColor: theme.palette.action.hover},
        position: 'absolute',
        backgroundColor: theme.palette.background.iconButton,
        transform: 'translateX(-50%)',
        mt: '30px'
    }
}