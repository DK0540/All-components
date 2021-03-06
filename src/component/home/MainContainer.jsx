import * as React from 'react';
import Box from '@mui/material/Box';
import Sidenav from '../navigation/Sidenav';
import Headnav from '../navigation/Headnav';

export default function MainContainer() {
    return (
        <>
            <Headnav />
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                    <Box gridColumn="span 4">
                        <Sidenav />
                    </Box>
                    <Box gridColumn="span 8">
                        <h3>helo</h3>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
