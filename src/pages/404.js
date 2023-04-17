import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { purple } from '@mui/material/colors';

const primary = purple[500];
export default function Page404 () {
    return (
        <Box
            sx={{
                paddingTop: 16,
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: primary,
                color: 'white'
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>404!</Typography>
            <Typography variant="h5" color="text.secondary" style={{ color: 'white' }}>PAGE NOT FOUND</Typography>
            <Link
                to="/"
            >
                <Button sx={{margin:2, color: 'white'}} color="success"><ArrowBackIcon/> Ir al Home</Button>
            </Link>
        </Box>
    );
}