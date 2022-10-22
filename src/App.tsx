import {
    Drawer, IconButton, Toolbar, AppBar, Typography, Button,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Playground } from './Playground';

export const App = () => {
    const [isDrawerOpen, setDrawerState] = useState(true);
    const toggleDrawer = () => setDrawerState((state) => !state);

    return (
        <Box sx={{
            minHeight: '100vh',
        }}
        >
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{
                        margin: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                        <Typography variant="h6">
                        Tile Editor
                        </Typography>
                        <Box component="img" src="/tileicon.svg" alt="logo" sx={{ width: 30 }} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={isDrawerOpen}
                sx={{
                    width: 'max(20vw, 300px)',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 'max(20vw, 300px)',
                        boxSizing: 'border-box',
                        backgroundImage: `url(${process.env.PUBLIC_URL}/tilesheet-placeholder.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 80%',
                    },
                }}
            >
                <Toolbar />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    p: 1,
                    overflow: 'auto',
                    backdropFilter: 'blur(3px)',
                }}
                >
                    <Button variant="contained">Load SpriteSheet</Button>
                </Box>
            </Drawer>
            <Playground />
        </Box>
    );
};
