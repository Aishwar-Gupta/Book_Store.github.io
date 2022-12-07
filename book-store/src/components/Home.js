import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography sx={{fontFamily: "fantasy"}} variant="h2"> This is a Bookstore App </Typography>
                <Typography sx={{fontFamily: "fantasy"}} variant="h3"> You can add, delete or update the items </Typography>

                <Button LinkComponent={Link} to='/books' sx={{marginTop: 15, backgroundColor: "orangered"}} variant="contained">
                    <Typography variant="h3"> View All Products </Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Home;