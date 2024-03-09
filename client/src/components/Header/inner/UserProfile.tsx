import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {Avatar, Tooltip} from "@mui/material";
import {SETTINGS} from '../utils/consts.tsx'

export default function UserProfile() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{
            flexGrow: 0,
            position: 'relative',
            top: 25
        }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{ paddingRight: '10px' }}
                >Котов К.К.</Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar sx={{ height: 50, width: 50 }} alt="Remy Sharp"
                                src="https://random-d.uk/api/v2/randomimg"
                                // src="https://cataas.com/cat?width=50"
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {SETTINGS.map((setting: string) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}