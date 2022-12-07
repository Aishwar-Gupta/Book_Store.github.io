import React from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState(false);
    return ( 
        <div>
            <AppBar position = 'sticky' sx={{backgroundColor:'#232F3D'}}>
                <Toolbar>
                    <NavLink to="/">
                        <Typography>
                            <AutoStoriesIcon></AutoStoriesIcon>
                        </Typography>
                    </NavLink>
                    
                    <Tabs textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)} 
                            sx={{ml:'auto'}}>
                        <Tab LinkComponent={NavLink} to='/add-book' label='ADD BOOK'></Tab>
                        <Tab LinkComponent={NavLink} to='/books' label='BOOKS'></Tab>
                        <Tab LinkComponent={NavLink} to='/about-us' label='ABOUT US'></Tab>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
     );
}

export default Header;