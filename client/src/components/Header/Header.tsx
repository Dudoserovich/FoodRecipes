import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import classes from './Header.module.scss';
import {AddButton} from "components/Header/inner/AddButton.tsx";

import {NAME_PAGES} from './utils/consts.tsx'
import {SiteNameTypography} from "components/Header/inner/SIteNameTypography.tsx";
import UserProfile from "components/Header/inner/UserProfile.tsx";
import {HashLink} from "react-router-hash-link";

export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className={classes.header} component="nav">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: {md: 'flex'},
                        alignItems: {md: "flex-start"},
                        flexDirection: {md: "column"}
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: 10
                            }}
                        >
                            <SiteNameTypography display={{xs: 'none', md: 'flex'}}/>

                            <AddButton styles={{
                                "&:hover": {color: "#DC944F"},
                                display: {xs: 'none', md: 'flex'}
                            }}
                            />

                        </div>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {NAME_PAGES.map((page: string) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <UserProfile/>
                    </Box>

                    <SiteNameTypography display={{xs: 'flex', md: 'none'}}/>

                    <div>
                        <AddButton styles={{
                            "&:hover": {color: "cyan"},
                            display: {sx: "flex", md: "none"}
                        }}
                        />

                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {NAME_PAGES.map((page: string) => (
                                <HashLink
                                    className={classes.hashLink}
                                    key={page}
                                    to={'#' + page}
                                    scroll={(el) => {
                                        const yOffset = -150; // Adjust the offset to your liking
                                        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                                        window.scrollTo({top: y, behavior: 'smooth'});
                                    }}
                                >
                                    {page}
                                </HashLink>
                            ))}
                        </Box>
                    </div>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
