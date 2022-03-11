import React from 'react';
import {Card, CardActions, CardContent, Divider, IconButton, Typography} from "@mui/material";
import {Casino, Cottage} from "@mui/icons-material";
import {cardStyles} from "./CardStyles";

const CardComp = ({data, handler}) => {
    const {id, advice} = data;
    return (
        <Card sx={cardStyles.cardContainer}>
            <CardContent>
                <Typography
                    variant={'subtitle2'}
                    align={'center'}
                >Advice #{id}</Typography>
                <Typography
                    variant={'subtitle1'}
                    align={'center'}
                    sx={{
                        mt: '1rem'
                    }}
                >"{advice}"</Typography>
                <Divider light={true} sx={{mt: '1.5rem'}}>
                    <Cottage color={'iconColor'}/>
                </Divider>
            </CardContent>
            <CardActions sx={{
                display: 'inline-block',
                padding: '24px',
            }}>
                <IconButton
                    sx={cardStyles.cardButton}
                    size={'large'}
                    color={'diceColor'}
                    onClick={handler}
                >
                    <Casino/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CardComp;