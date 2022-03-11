import React from 'react';
import {CircularProgress} from "@mui/material";
import { loaderStyles } from "./Loader";

export const Loader = () => {
    const loaderStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
    return (
        <CircularProgress
            sx={loaderStyles}
            color="secondary"/>
    );
};

export default Loader;