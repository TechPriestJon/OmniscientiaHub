import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    {props.pageName}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  );
}

export default Header;





